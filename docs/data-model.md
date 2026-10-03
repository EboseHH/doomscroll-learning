# Understanding the data model

## Three entities, connected by IDs

An **interest** is a broad subject, such as Nature. A **topic** is a smaller area, such as Plant life. A **lesson** is one complete explanation, such as “A tree is building itself out of air.”

The prototype stores these as separate collections in `src/data.ts`:

- Interest `nature` has the name Nature.
- Topic `plants` has `interest_id: 'nature'`.
- Lesson `trees` has `topic_id: 'plants'`.

We look up the topic from the lesson, then the interest from the topic. We do not copy the interest name onto every lesson. Renaming Nature would therefore require changing one record, not all its lessons. Stable IDs stay the same when display names change.

One interest can have many topics. One topic can have many lessons. Each lesson belongs to one topic, and a topic can belong to one interest or none.

## The planned database (not implemented)

| Table                  | Purpose                    | Key or constraint                                            |
| ---------------------- | -------------------------- | ------------------------------------------------------------ |
| `users`                | A person with an account   | Primary key `id`                                             |
| `interests`            | Broad subjects             | Primary key `id`                                             |
| `topics`               | Areas within subjects      | Primary key `id`; nullable foreign key `interest_id`         |
| `lessons`              | Complete lessons           | Primary key `id`; required foreign key `topic_id`            |
| `user_interests`       | Interests a user follows   | Unique pair `(user_id, interest_id)`                         |
| `saved_lessons`        | Lessons a user saves       | Unique pair `(user_id, lesson_id)`                           |
| `user_lesson_progress` | Explicit lesson completion | Unique pair `(user_id, lesson_id)`; `completed_at` timestamp |

Foreign keys refer to the IDs in their corresponding tables. The unique pairs can be composite primary keys or unique constraints.

`user_interests` and `saved_lessons` are **junction tables**. They represent many-to-many relationships: one user can follow several interests, and one interest can be followed by several users. Similarly, many users can save the same lesson and one user can save many lessons. A row such as `(user_42, trees)` records one save. A unique constraint prevents a second identical save; unsaving removes that row.

## Why `topics.interest_id` is nullable

A topic may remain useful even when its parent interest is removed. In the future database, the foreign key will use **ON DELETE SET NULL**. Deleting Nature would leave Plant life and its lessons in place, but set Plant life’s `interest_id` to `NULL`. This means “no assigned interest,” not “missing topic.” The lesson still points to its existing topic. The UI can display that content as Uncategorised until it is reassigned. The TypeScript model allows `null` already; every sample topic currently has an interest.

## Browser storage is not a database

This prototype has no users table, login, foreign-key enforcement or junction-table rows. It keeps two arrays of IDs in local storage: `doomscroll.interests` and `doomscroll.saved`. These represent this browser’s guest preferences, not an authenticated user. The app validates IDs against the prepared content and removes duplicates when loading. Save and interest controls also prevent duplicate IDs.

Browser storage can be deleted and does not sync to another device. A future database would enforce uniqueness and relationships independently of the UI. Progress is deferred: there is no progress storage, completion button or inferred completion from scrolling.
