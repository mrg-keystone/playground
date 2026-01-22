import { greet } from "@playground/core";
import { capitalize } from "@playground/utils";

export function run(name: string): void {
  console.log(greet(capitalize(name)));
}
