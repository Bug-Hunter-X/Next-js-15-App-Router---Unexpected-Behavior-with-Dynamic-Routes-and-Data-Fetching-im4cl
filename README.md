# Next.js 15 App Router - Unexpected Behavior with Dynamic Routes and Data Fetching

This repository demonstrates an unexpected behavior encountered when using dynamic routes and data fetching within the Next.js 15 App Router.  The issue involves inconsistent data rendering based on the route parameters and how data fetching is handled.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/` or `/id` (where id is any number). You'll see that data fetching works differently between these routes, even though they're both using the same function, which should not happen, it's a bug from Next.js itself.

## Expected Behavior

Consistent data fetching across all dynamic routes.  The data should be fetched and displayed correctly regardless of the route parameters.

## Actual Behavior

Inconsistent data fetching. The data is not fetched consistently across all dynamic routes.

## Workaround

A potential workaround is to refactor the data fetching process using different approach and strategies.