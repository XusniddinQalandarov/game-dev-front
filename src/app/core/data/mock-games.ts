import { Game } from '../models/game.model';

export const MOCK_GAMES: Game[] = [
  {
    id: 'pipes-puzzle',
    title: 'Pipes',
    description: 'A puzzle game where you rotate pipe pieces to connect them and create a continuous path for water to flow from start to end.',
    thumbnail: 'images/pipes_puzzle_1773220487434.png',
    genre: 'Puzzle',
    rating: 4.8,
    playerCount: 15200,
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)'
  },
  {
    id: 'tetris-puzzle',
    title: 'Tetris',
    description: 'A classic block puzzle game where falling shapes must be arranged to form complete horizontal lines without gaps.',
    thumbnail: 'images/tetris_puzzle_1773220502731.png',
    genre: 'Classic',
    rating: 4.9,
    playerCount: 20500,
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
  },
  {
    id: 'fifteen-puzzle',
    title: '15-Puzzle',
    description: 'A sliding puzzle with numbers 1–15 where you move tiles to arrange them in the correct numerical order.',
    thumbnail: 'images/fifteen_puzzle_1773220521815.png',
    genre: 'Logic',
    rating: 4.6,
    playerCount: 12400,
    gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)'
  },
  {
    id: 'one-stroke',
    title: 'One Stroke',
    description: 'A puzzle where you draw a single continuous line that passes through every point or shape without lifting your finger.',
    thumbnail: 'images/one_stroke.jpg',
    genre: 'Puzzle',
    rating: 4.7,
    playerCount: 9800,
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
  },
  {
    id: 'math-game',
    title: 'Math Game',
    description: 'A game that challenges players to solve arithmetic or logic problems to improve calculation and thinking skills.',
    thumbnail: 'images/math_puzzle_1773220557038.png',
    genre: 'Educational',
    rating: 4.8,
    playerCount: 18600,
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    description: 'A logic puzzle where players fill a grid with numbers so that each number appears only once in every row, column, and sub-grid.',
    thumbnail: 'images/sudoku_puzzle_1773220580646.png',
    genre: 'Logic',
    rating: 4.9,
    playerCount: 22100,
    gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'
  },
  {
    id: 'color-sort',
    title: 'Color Sort',
    description: 'A puzzle game where players organize mixed colors into separate containers so that each container contains only one color.',
    thumbnail: 'images/color_sort_puzzle_1773220599359.png',
    genre: 'Puzzle',
    rating: 4.7,
    playerCount: 11300,
    gradient: 'linear-gradient(135deg, #fc5c7d, #6a82fb)'
  },
  {
    id: 'number-link',
    title: 'Number Link',
    description: 'A puzzle game where players connect pairs of matching numbers on a grid using continuous paths. The paths must not cross or overlap.',
    thumbnail: 'images/number_link_puzzle_1773220638534.png',
    genre: 'Logic',
    rating: 4.6,
    playerCount: 8900,
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)'
  },
  {
    id: 'escape',
    title: 'Escape',
    description: 'A sliding block puzzle where players move blocks to create a path for the main block to reach the exit.',
    thumbnail: 'images/escape_puzzle_1773220662045.png',
    genre: 'Puzzle',
    rating: 4.8,
    playerCount: 14500,
    gradient: 'linear-gradient(135deg, #e0eafc, #cfdef3)'
  },
  {
    id: 'paint',
    title: 'Paint',
    description: 'A grid-based puzzle game where players fill tiles with color to recreate a hidden image or pattern.',
    thumbnail: 'images/paint_puzzle_1773220685563.png',
    genre: 'Creative',
    rating: 4.5,
    playerCount: 7400,
    gradient: 'linear-gradient(135deg, #0c0c1d, #302b63, #24243e)'
  }
];
