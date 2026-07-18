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
        href: "/game/snake-2048.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/snake-2048-icon.png",
        title: "Snake 2048"
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
        href: "/game/snakes-and-laders.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/snakes-and-laders-icon.jpg",
        title: "Snakes and Laders"
    },
    {
        href: "/game/snake-out.html",
        image: "https://pub-b87ee89e69e04430995d1431e31e506e.r2.dev/snake-out-icon.jpg",
        title: "Snake Out"
    }
];

function renderGames(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const gamesHTML = gamesData.map(game => `
        <a href="${game.href}" class="game-card">
            <img src="${game.image}" alt="${game.title}" width="120" height="120" loading="lazy">
            <div class="game-title">${game.title}</div>
        </a>
    `).join('');
    
    container.innerHTML = gamesHTML;
}
