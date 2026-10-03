import { test, expect } from "@playwright/test";

test("mixed feed, personalisation, wildcard and dependent filters", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("article")).toHaveCount(12);
  await page
    .getByRole("button", { name: "Nature", exact: true })
    .last()
    .click();
  await expect(page.locator("article")).toHaveCount(3);
  await page
    .getByRole("button", { name: "Design", exact: true })
    .last()
    .click();
  await expect(page.locator("article")).toHaveCount(6);
  await page.reload();
  await expect(page.locator("article")).toHaveCount(6);
  await page
    .getByRole("combobox", { name: "Filter by interest" })
    .selectOption("nature");
  await page
    .getByRole("combobox", { name: "Filter by topic" })
    .selectOption("plants");
  await expect(page.locator("article")).toHaveCount(2);
  await page
    .getByRole("combobox", { name: "Filter by interest" })
    .selectOption("design");
  await expect(
    page.getByRole("combobox", { name: "Filter by topic" }),
  ).toHaveValue("");
  await expect(page.locator("article")).toHaveCount(3);
  await page.getByRole("button", { name: "Wildcard", exact: true }).click();
  await expect(page.locator("article")).toHaveCount(12);
  await page
    .getByRole("combobox", { name: "Filter by interest" })
    .selectOption("science");
  await expect(page.locator("article")).toHaveCount(3);
  await page.getByRole("button", { name: "For you", exact: true }).click();
  await expect(page.locator("article")).toHaveCount(6);
});

test("saving, unsaving, empty states and persistence", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Saved lessons 0", exact: true })
    .click();
  await expect(
    page.getByText("Your next favourite is out there."),
  ).toBeVisible();
  await page.getByRole("button", { name: "Explore lessons" }).click();
  await page
    .getByRole("button", {
      name: "Save lesson: A tree is building itself out of air.",
      exact: true,
    })
    .click();
  await page.reload();
  await page
    .getByRole("button", { name: "Saved lessons 1", exact: true })
    .click();
  await expect(page.locator("article")).toHaveCount(1);
  await page
    .getByRole("combobox", { name: "Filter by interest" })
    .selectOption("design");
  await expect(
    page.getByText("No lessons in this little corner yet."),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Clear filters", exact: true })
    .last()
    .click();
  await page
    .getByRole("button", {
      name: "Unsave lesson: A tree is building itself out of air.",
      exact: true,
    })
    .click();
  await expect(page.locator("article")).toHaveCount(0);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Saved lessons 0", exact: true }),
  ).toBeVisible();
});

test("corrupt storage is safe, interest controls work with keyboard, mobile has no overflow", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem("doomscroll.interests", "{broken");
    localStorage.setItem(
      "doomscroll.saved",
      JSON.stringify(["missing", "trees", "trees"]),
    );
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("article")).toHaveCount(12);
  await expect(
    page.getByRole("button", { name: "Saved 1", exact: true }),
  ).toBeVisible();
  const nature = page.getByRole("button", { name: "Nature", exact: true });
  await nature.focus();
  await page.keyboard.press("Space");
  await expect(nature).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("article")).toHaveCount(3);
  await page.keyboard.press("Space");
  await expect(page.locator("article")).toHaveCount(12);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("unavailable storage explains session-only saves", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new DOMException("Storage disabled", "SecurityError");
    };
  });
  await page.goto("/");
  await expect(
    page.getByText("Browser storage is unavailable.", { exact: false }),
  ).toBeVisible();
  await page
    .getByRole("button", {
      name: "Save lesson: A tree is building itself out of air.",
      exact: true,
    })
    .click();
  await page.getByRole("button", { name: "Saved 1", exact: true }).click();
  await expect(page.locator("article")).toHaveCount(1);
});

test("prepared content has unique IDs and valid relationships", async () => {
  const { interests, topics, lessons } = await import("../src/data");
  for (const collection of [interests, topics, lessons])
    expect(new Set(collection.map((x) => x.id)).size).toBe(collection.length);
  expect(lessons.length).toBeGreaterThanOrEqual(12);
  for (const topic of topics)
    expect(
      topic.interest_id === null ||
        interests.some((i) => i.id === topic.interest_id),
    ).toBe(true);
  for (const lesson of lessons) {
    expect(topics.some((t) => t.id === lesson.topic_id)).toBe(true);
    expect(lesson.content.length).toBeGreaterThan(100);
  }
});

test("feed controls and content meet automated accessibility checks", async ({
  page,
}) => {
  const { default: AxeBuilder } = await import("@axe-core/playwright");
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    results.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
});
