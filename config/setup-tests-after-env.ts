/**
 * This file contains settings related to the development of the tests. You
 * don't need to copy it to your project.
 */

/*^
 * Configure testing-library to be fail the tests when there are better queries
 * that can be used.
 */
import { configure } from "@testing-library/react";

configure({ throwSuggestions: true });
