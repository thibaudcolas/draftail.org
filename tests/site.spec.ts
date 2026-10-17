import { expect, test } from "@playwright/test"

// Keep site navigation checks independent of the separately deployed demo service.
test.beforeEach(async ({ page }) => {
  await page.route("https://demo.draftail.org/**", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<button>Demo action</button>",
    }),
  )
})

test("homepage links lead to the intended documentation", async ({ page }) => {
  for (const [label, path, heading] of [
    ["example with react-intl", "/docs/reference/i18n", "i18n"],
    ["UI theming", "/docs/reference/ui-theming", "UI theming"],
    ["Get Started", "/docs/introduction/getting-started", "Getting started"],
  ]) {
    await page.goto("/")
    await page.getByRole("link", { name: label, exact: true }).click()
    await expect(page).toHaveURL(new RegExp(`${path}$`))
    await expect(page.locator("h1")).toContainText(heading)
  }
})

test("every documented version can be opened", async ({ page }) => {
  await page.goto("/versions")
  const links = await page
    .getByRole("link", { name: "Documentation", exact: true })
    .evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("href")),
    )
  expect(links.length).toBeGreaterThan(1)
  for (const href of links) {
    await page.goto("/versions")
    await page
      .getByRole("link", { name: "Documentation", exact: true })
      .and(page.locator(`a[href="${href}"]`))
      .click()
    await expect(page.locator("h1")).toHaveText("Getting started")
  }
})

test("demos have names, fallback links and fit the viewport", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/examples",
    "/docs/next/introduction/getting-started",
  ]) {
    await page.goto(path)
    const frames = page.locator('iframe[src^="https://demo.draftail.org/"]')
    expect(await frames.count()).toBeGreaterThan(0)
    for (const frame of await frames.all()) {
      const title = await frame.getAttribute("title")
      expect(title).toBeTruthy()
      const link = page.getByRole("link", {
        name: `Open ${title}`,
        exact: true,
      })
      await expect(link).toHaveAttribute(
        "href",
        (await frame.getAttribute("src")) ?? "",
      )
      await frame.scrollIntoViewIfNeeded()
      const action = frame
        .contentFrame()
        .getByRole("button", { name: "Demo action" })
      await expect(action).toBeVisible()
      await action.focus()
      await page.keyboard.press("Tab")
      await expect(link).toBeFocused()
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  }
})

test("starter supports typing and saving across reloads", async ({ page }) => {
  const errors: string[] = []
  page.on("pageerror", (error) => errors.push(error.message))
  await page.goto("http://127.0.0.1:4173")
  const editor = page.getByRole("textbox", { name: "Rich text editor" })
  await editor.click()
  await page.keyboard.type("A working Draftail starter")
  await page.getByRole("heading", { name: "Draftail getting started" }).click()
  await expect
    .poll(() => page.evaluate(() => sessionStorage.getItem("draftail:content")))
    .toContain("A working Draftail starter")
  await page.reload()
  await expect(editor).toContainText("A working Draftail starter")
  expect(errors).toEqual([])
})
