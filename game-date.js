const gamesData = [
    {
        href: "https://snakeapplega.me/game/paper-snakes.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/paper-snakes-game-icon.jpg",
        title: "Paper Snakes"
    },
    {
        href: "https://snakeapplega.me/game/merge-snake-battle.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/merge-snake-battle-game-icon.jpg",
        title: "Merge Snake Battle"
    },
    {
        href: "https://snakeapplega.me/game/happy-snakes.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/happy-snakes-game-icon.jpg",
        title: "Happy Snakes"
    },
    {
        href: "https://snakeapplega.me/game/google-snake-game.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/google-snake-game-icon.jpg",
        title: "Google Snake Game"
    },
    {
        href: "https://snakeapplega.me/game/classic-snake-game.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/classic-snake-game-icon.jpg",
        title: "Classic Snake Game"
    },
    {
        href: "https://snakeapplega.me/game/blocky-snake.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/blocky-snake-game-icon.jpg",
        title: "Blocky Snake"
    },
    {
        href: "/game/react-tetris.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/react-tetris-icon.png",
        title: "React Tetris"
    },
    {
        href: "/game/subway-surf-zurich.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/subway-surf-zurich-icon.png",
        title: "Subway Surf Zurich"
    },
    {
        href: "/game/comball.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/comball-icon.png",
        title: "Comball"
    },
    {
        href: "https://golforbit.online/",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/golf-orbit-icon.png",
        title: "Golf Orbit"
    },
    {
        href: "/game/snake-2048.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/snake-2048-icon.png",
        title: "Snake 2048"
    },
    {
        href: "/game/sprunki.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/sprunki-game-icon.png",
        title: "Sprunki"
    },
    {
        href: "/game/snakes-and-apples.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/snakes-and-apples-icon.png",
        title: "Snakes and Apples"
    },
    {
        href: "/game/fruit-snake.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/fruit-snake-icon.png",
        title: "Fruit Snake"
    },
    {
        href: "/game/orber.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/orber-icon.png",
        title: "Orber"
    },
    {
        href: "/game/crazy-cattle-3d.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/crazy-cattle-3d-icon.jpg",
        title: "Crazy Cattle 3D"
    },
    {
        href: "/game/pacman-unblocked.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/pacman-unblocked-icon.png",
        title: "Pacman  Unblocked"
    },
    {
        href: "/game/snakes-and-laders.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/snakes-and-laders-icon.jpg",
        title: "Snakes and Laders"
    }
];

function renderGames(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const gamesHTML = gamesData.map(game => `
        <a href="${game.href}" class="game-card">
            <img src="${game.image}" alt="${game.title}">
            <div class="game-title">${game.title}</div>
        </a>
    `).join('');
    
    container.innerHTML = gamesHTML;
}