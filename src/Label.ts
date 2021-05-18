const nouns = [
    'apple',
    'frog',
    'tree',
    'cylinder',
    'cactus',
    'rock',
    'pilot',
    'pencil',
    'river',
    'breakfast',
    'camera',
    'candle',
    'machine',
    'dream',
]

const adjectives = [
    'calm',
    'happy',
    'long',
    'beautiful',
    'lazy',
    'polite',
    'repressed',
    'unkempt',
    'clean',
    'evil',
    'frail',
    'modern',
    'wild'
]

const vowels = ['a', 'e', 'i', 'o', 'u'];

export const getLabel = (sessionNumber: number, brewNumber: number) => {
    const noun = nouns[brewNumber % nouns.length];
    const adjective = adjectives[(sessionNumber + brewNumber) % adjectives.length];
    const article = vowels.includes(adjective[0]) ? 'an' : 'a';
    return `${article} ${adjective} ${noun}`;
}