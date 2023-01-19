# SDK Design

## Overview

For this Lord of the Rings SDK, I wanted to emphasize clarity and ease of use, both for the user and the developer. I also kept maintainability and extendability in mind so that it could be easily expanded to more use cases.

## Code Structure

The code is structured very simply. In `src/index.ts` we have the main `LOTR` class, which represents the API as a whole. That class has the properties `movies` and `quotes` which represent the entities users can request information about. Note that this SDK only hits the `/movie` endpoint, not a separate `/quote` endpoint - I felt that the `quotes` request was different enough to warrant its own entity in the code.

The `movies` and `quotes` properties of `LOTR` are subclasses that inherit from the base class `APIRoute`. They take an axios API instance in their constructor - that way the code doesn't need several copies of a code block that instantiates axios with the correct config; the constructor of `LOTR` does it once and then passes it to the `movies` and `quotes` entities.

This class pattern would make it very simple to add more entities in the future; they would only need to follow the existing pattern of inheriting from `APIRoute` and being added as a property to the main `LOTR` class.

## User Interface

I feel that having each entity be a property of the main `LOTR` class makes the user experience fairly easy to understand. `lotr.movies.getAll()` is a very self-explanatory piece of code, and I like to design with that in mind. All of the SDK methods are similarly worded to describe exactly what they do without being too verbose.

