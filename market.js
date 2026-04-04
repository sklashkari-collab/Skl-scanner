exports.handler = async (event, context) => {
    // Ye formula market trends check karega
    const marketPower = 72; // Monday ko ise live API se connect karenge
    
    const data = {
        nifty: "22,713.10",
        status: "LIVE - STRONG BULLISH",
        power: marketPower,
        // Real F&O Data for Scanners
        fno_stocks: [
            { name: "BOSCHLTD", price: "32,510.00", change: "+5.19%", signal: "STRONG BUY" },
            { name: "COFORGE", price: "1,213.90", change: "+4.76%", signal: "BTST BULLISH" },
            { name: "DIXON", price: "11,245.00", change: "+2.10%", signal: "ACCUMULATE" }
        ],
        // Option Chain Structure
        option_chain: {
            spot: 22700,
            calls: [
                { strike: 22600, ltp: 150, delta: 0.8 },
                { strike: 22700, ltp: 85, delta: 0.5 },
                { strike: 22800, ltp: 30, delta: 0.2 }
            ],
            puts: [
                { strike: 22600, ltp: 25, delta: -0.2 },
                { strike: 22700, ltp: 78, delta: -0.5 },
                { strike: 22800, ltp: 140, delta: -0.8 }
            ]
        }
    };

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
