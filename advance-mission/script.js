document.addEventListener('DOMContentLoaded', function() {
    // Toggle antara harga mingguan dan bulanan
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const prices = document.querySelectorAll('.price');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const period = this.getAttribute('data-period');
            
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            prices.forEach(price => {
                const weeklyPrice = price.getAttribute('data-weekly');
                const monthlyPrice = price.getAttribute('data-monthly');
                
                if (period === 'weekly') {
                    price.textContent = `Rp ${weeklyPrice}`;
                } else {
                    price.textContent = `Rp ${monthlyPrice}`;
                }
            });
        });
    });

    // Efek hover pada tombol
    const buttons = document.querySelectorAll('.choose-btn, .join-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.opacity = '0.8';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.opacity = '1';
        });
    });
});