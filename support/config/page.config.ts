import { test as base, expect } from '@playwright/test';

import { TextboxPage } from './page-loader';
import { CheckboxPage } from './page-loader';
import { RadioPage } from './page-loader';
import { WebtablesPage } from './page-loader';
import { ButtonsPage } from './page-loader';
import { LinksPage } from './page-loader';
import { BrokenlinksPage } from './page-loader';
import { UploaddownloadPage } from './page-loader';
import { DynamicpropertiesPage } from './page-loader';
import { PracticeformPage } from './page-loader';
import { BrowserwindowsPage } from './page-loader';
import { AlertsPage } from './page-loader';
import { FramesPage } from './page-loader';
import { NestedframesPage } from './page-loader';
import { ModaldialogsPage } from './page-loader';
import { AccordianPage } from './page-loader';
import { AutocompletePage } from './page-loader';
import { DatepickerPage } from './page-loader';
import { SliderPage } from './page-loader';
import { ProgressbarPage } from './page-loader';
import { TabsPage } from './page-loader';
import { TooltipsPage } from './page-loader';
import { MenuPage } from './page-loader';
import { SelectmenuPage } from './page-loader';
import { SortablePage } from './page-loader';
import { SelectablePage } from './page-loader';
import { ResizablePage } from './page-loader';
import { DroppablePage } from './page-loader';
import { DraggablePage } from './page-loader';
import { LoginPage } from './page-loader';
import { BooksPage } from './page-loader';
import { BookapiPage } from './page-loader';
// grow_tests appends one import line per new page class above this comment.
// Imports come from './page-loader' (the barrel) — not direct page class paths.
// example: import { LoginPage } from './page-loader';

const test = base.extend<{
  // fixture-types: grow_tests appends one type entry per feature below this line
  bookapiPage: BookapiPage;
  booksPage: BooksPage;
  loginPage: LoginPage;
  draggablePage: DraggablePage;
  droppablePage: DroppablePage;
  resizablePage: ResizablePage;
  selectablePage: SelectablePage;
  sortablePage: SortablePage;
  selectmenuPage: SelectmenuPage;
  menuPage: MenuPage;
  tooltipsPage: TooltipsPage;
  tabsPage: TabsPage;
  progressbarPage: ProgressbarPage;
  sliderPage: SliderPage;
  datepickerPage: DatepickerPage;
  autocompletePage: AutocompletePage;
  accordianPage: AccordianPage;
  modaldialogsPage: ModaldialogsPage;
  nestedframesPage: NestedframesPage;
  framesPage: FramesPage;
  alertsPage: AlertsPage;
  browserwindowsPage: BrowserwindowsPage;
  practiceformPage: PracticeformPage;
  dynamicpropertiesPage: DynamicpropertiesPage;
  uploaddownloadPage: UploaddownloadPage;
  brokenlinksPage: BrokenlinksPage;
  linksPage: LinksPage;
  buttonsPage: ButtonsPage;
  webtablesPage: WebtablesPage;
  radioPage: RadioPage;
  checkboxPage: CheckboxPage;
  textboxPage: TextboxPage;
  // example: loginPage fixture → LoginPage class
}>({
  // fixture-impls: grow_tests appends one fixture entry per feature below this line
  bookapiPage: async ({ page }, use) => { await use(new BookapiPage(page)); },
  booksPage: async ({ page }, use) => { await use(new BooksPage(page)); },
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  draggablePage: async ({ page }, use) => { await use(new DraggablePage(page)); },
  droppablePage: async ({ page }, use) => { await use(new DroppablePage(page)); },
  resizablePage: async ({ page }, use) => { await use(new ResizablePage(page)); },
  selectablePage: async ({ page }, use) => { await use(new SelectablePage(page)); },
  sortablePage: async ({ page }, use) => { await use(new SortablePage(page)); },
  selectmenuPage: async ({ page }, use) => { await use(new SelectmenuPage(page)); },
  menuPage: async ({ page }, use) => { await use(new MenuPage(page)); },
  tooltipsPage: async ({ page }, use) => { await use(new TooltipsPage(page)); },
  tabsPage: async ({ page }, use) => { await use(new TabsPage(page)); },
  progressbarPage: async ({ page }, use) => { await use(new ProgressbarPage(page)); },
  sliderPage: async ({ page }, use) => { await use(new SliderPage(page)); },
  datepickerPage: async ({ page }, use) => { await use(new DatepickerPage(page)); },
  autocompletePage: async ({ page }, use) => { await use(new AutocompletePage(page)); },
  accordianPage: async ({ page }, use) => { await use(new AccordianPage(page)); },
  modaldialogsPage: async ({ page }, use) => { await use(new ModaldialogsPage(page)); },
  nestedframesPage: async ({ page }, use) => { await use(new NestedframesPage(page)); },
  framesPage: async ({ page }, use) => { await use(new FramesPage(page)); },
  alertsPage: async ({ page }, use) => { await use(new AlertsPage(page)); },
  browserwindowsPage: async ({ page }, use) => { await use(new BrowserwindowsPage(page)); },
  practiceformPage: async ({ page }, use) => { await use(new PracticeformPage(page)); },
  dynamicpropertiesPage: async ({ page }, use) => { await use(new DynamicpropertiesPage(page)); },
  uploaddownloadPage: async ({ page }, use) => { await use(new UploaddownloadPage(page)); },
  brokenlinksPage: async ({ page }, use) => { await use(new BrokenlinksPage(page)); },
  linksPage: async ({ page }, use) => { await use(new LinksPage(page)); },
  buttonsPage: async ({ page }, use) => { await use(new ButtonsPage(page)); },
  webtablesPage: async ({ page }, use) => { await use(new WebtablesPage(page)); },
  radioPage: async ({ page }, use) => { await use(new RadioPage(page)); },
  checkboxPage: async ({ page }, use) => { await use(new CheckboxPage(page)); },
  textboxPage: async ({ page }, use) => { await use(new TextboxPage(page)); },
  // example: loginPage async fixture wrapping new LoginPage(page)
});

export { test, expect };
