import { hnlogsToMemory } from "./tsvParser";

export const countQueries = (date: string) => {
  const dateRegExp = new RegExp(date);

  const filterQuery = hnlogsToMemory
    // select all queries with the correct date
    .filter((query) => dateRegExp.test(query[0]))
    // create new array only with querie's value 
    .map((query) => query[1]);

  // delete all duplicate
  const count = [...new Set(filterQuery)];
  return count.length;
};
