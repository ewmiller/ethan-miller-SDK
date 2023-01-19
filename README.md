# LOTR SDK

One SDK to bring them all, and in the ~darkness~ network, bind them.

## Introduction

This Javascript/Typescript SDK is used to access the entities within the `/movie` endpoint of [The One API](https://the-one-api.dev/documentation#2). You can get a list of all Lord of the Rings Movies, request one specific movie via its ID, or request quotes from any individual movie (also by its ID).

## Installation

Using npm: 

```
npm i @ewmiller/lotr-sdk
```

## Usage

### API Key

First you'll need to sign up for an account at [The One API](https://the-one-api.dev/documentation#2) to receive an API key.

Next, import the SDK and instantiate it with your API key. In this example, we're using `dotenv` to set the API key as an environment variable called `LOTR_API_TOKEN`, but you can use any method you prefer.

### Create the Client
Javascript:
```
const LOTR = require('@ewmiller/lotr-sdk').LOTR;
require('dotenv').config();
const client = new LOTR({
  apiToken: process.env.LOTR_API_TOKEN
});
```

Typescript:
```
import { LOTR } from '@ewmiller/lotr-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new LOTR({
  apiToken: process.env.LOTR_API_TOKEN
});
```

### Using the Client

Now you're ready to call the SDK methods! The following methods are supported: `movies.getAll()`, `movies.getOne(id: string)`, and `quotes.getQuotesFromMovie(id: string)`. Here are usage examples of each: 

```
const allMovies = await lotr.movies.getAll();

const oneMovie = await lotr.movies.getOne("5cd95395de30eff6ebccde56");

const movieQuotes = await lotr.quotes.getQuotesFromMovie("5cd95395de30eff6ebccde5d");

```

### Response Output

Data will be returned in the following format:

```
{
  docs: [
    {
      ... // movie or quote details here
    },
    {
      ... // movie or quote details here 
    }
  ]
}
```

Where `docs` will be an array of either movie or quote entities. The data types for these are described on the One API's documentation, but are also copied here as typescript interfaces for reference:

```
export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}
```

### Config Options

Each SDK method takes an optional configuration object as its second parameter. The config options are used for pagination of the API: 

```
export interface ConfigOptions {
  limit?: number;
  page?: number;
  offset?: number;
}
```

To use these options, simply pass them in to any SDK method when you call it:

```
const result = await lotr.quotes.getQuotesFromMovie("5cd95395de30eff6ebccde5d", {
  limit: 100,
  page: 2,
  offset: 3
});
```

## Future Work

This SDK only implements the `/movie` endpoint of The One API, but could easily be extended to include more API functionality. Check out `design.md` for more thoughts on the SDK design and potential for expansion. Thanks for reading!
