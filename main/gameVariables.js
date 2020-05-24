const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const mouseObj = {x: 0, y: 0, w: 1, h: 1};
const worldObjectCategories = 3;

const particles = [];
const drawnShapes = [];
const smoke = [];
const goals = [];
const blocks = [];
const dangerZones = [];

let plonks = [];

let engine;
let world;
let touchedVertices = [];
let canDraw = true;
let drawStatic = true;
let startedDrawing = false;
//let stage = 0;
let level = -1;

let mouseHasBeenReleased = true;

let levelDesignMode = false;

let chosenBodyType = null;
let chosenBodyAngle = 0;
let chosenBodyWidth = 0.1;
let chosenBodyHeight = 0.1;
let chosenStartingX = 0.5;
const levelDesignElements = [];