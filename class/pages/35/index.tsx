const profiles = [
  { id: 1, name: "철수" },
  { id: 2, name: "영희" },
  { id: 3, name: "훈이" },
];

const newProfiles = {};
profiles.forEach((value) => (newProfiles[value.id] = { value: value.name }));
