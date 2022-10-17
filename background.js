"use strict";

const suggestions = [];

for (let i = 0; i < 5; i++) {
  suggestions.push({
    content: String(i),
    description: `number ${i}`,
    deletable: true,
  });
}

browser.omnibox.onInputChanged.addListener(function (text, suggest) {
  suggest(suggestions);
});

browser.omnibox.onDeleteSuggestion.addListener(function (text) {
  const suggestedItem = suggestions.find(
    (suggestion) => suggestion.description === text
  );
  const index = suggestions.indexOf(suggestedItem);

  suggestions.splice(index, 1);
});
