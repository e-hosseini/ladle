import getList from "../lib/get-list";

test("Single file with two stories", async () => {
  expect(
    await getList(["./tests/fixtures/animals.stories.tsx"], "cacheDir")
  ).toMatchSnapshot();
});

test("Capital letters in story names converted into delimiters", async () => {
  expect(
    await getList(["./tests/fixtures/capitalization.stories.tsx"], "cacheDir")
  ).toMatchSnapshot();
});

test("Capital letters in the filename converted into delimiters", async () => {
  expect(
    await getList(
      ["./tests/fixtures/filenameCapitalization.stories.tsx"],
      "cacheDir"
    )
  ).toMatchSnapshot();
});

test("Turn file name delimiters into spaces and levels correctly", async () => {
  expect(
    await getList(
      ["./tests/fixtures/our-animals--mammals.stories.tsx"],
      "cacheDir"
    )
  ).toMatchSnapshot();
});
