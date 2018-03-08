import {configure, getStorybook} from '@storybook/react';

function requireAll(requireContext) {
    requireContext.keys().forEach(file => {
        global.currentStorybookFile = file;
        requireContext(file);
    });
}

function loadStories() {
    requireAll(require.context('../src', true, /\.story\.jsx?$/));
    require('./../src/styles/index.scss');
}

configure(loadStories, module);

const stories = [];
const addStory = (kind, name) => stories.push({ kind: kind, name: name });
const isTaggedForTests = (kind, name) => kind.includes('[VR]') || name.includes('[VR]');

getStorybook().forEach(setOfStories => {
    setOfStories.stories.forEach(story => {
        if (isTaggedForTests(setOfStories.kind, story.name)) {
            addStory(setOfStories.kind, story.name);
        }
    });
});

Object.defineProperty(window, 'stories', {
    value: stories,
    writable: true,
    enumerable: true,
    configurable: false,
});
