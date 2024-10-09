<script>
// Button sliding effect on click
function slideButton() {
    var buttons = document.querySelectorAll('.btn-animate');
    buttons.forEach(function(button, index) {
        button.style.transform = 'translateX(100px)';
        button.style.transition = 'transform 1s ease-in-out';
    });
}

// Bouncing effect on page load
window.onload = function() {
    var buttons = document.querySelectorAll('.btn-animate');
    buttons.forEach(function(button, index) {
        button.style.animation = `bounce 1s ease ${index * 0.2}s forwards`;
    });
};

// Bouncing keyframe animation
document.styleSheets[0].insertRule(`
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
`, 0);
</script>
