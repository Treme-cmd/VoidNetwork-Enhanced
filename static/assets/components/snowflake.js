const snowflakesContainer = document.getElementById('snowflakes-container');
const snowflakesCount = 100;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.width = `${Math.random() * 5 + 2}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random();
    
    return snowflake;
}

function addSnowflakeAnimation(snowflake) {
    snowflake.style.animation = `fall ${snowflake.style.animationDuration} linear infinite`;
}

for (let i = 0; i < snowflakesCount; i++) {
    const snowflake = createSnowflake();
    addSnowflakeAnimation(snowflake);
    snowflakesContainer.appendChild(snowflake);
}

// Add keyframes animation to the stylesheet
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fall {
        0% {
            transform: translateY(-100vh);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`, styleSheet.cssRules.length);
