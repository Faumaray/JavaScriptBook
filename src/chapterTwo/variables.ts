export function workWithVariables() {
  // deno-lint-ignore prefer-const
  let admin: string;
  const name = "Джон";

  admin = name;

  console.log(`${admin}`);

  const _outPlanetName = "Земля";
  const _currentUserName = "Джон";
}
