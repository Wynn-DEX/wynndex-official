import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const chars = "アイウエオカキクケコ0123456789WYNNDEX$₿ABCDEF";
    let drops: number[] = [];

    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = Array(Math.floor(canvas.width / 18)).fill(1);
    }

    function draw() {
      ctx.fillStyle = "rgba(8,8,8,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "14px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = y * 18 > canvas.height - 40 ? "#ffffff" : "#00ff41";
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }

    init();
    window.addEventListener("resize", init);
    const interval = setInterval(draw, 45);
    return () => { clearInterval(interval); window.removeEventListener("resize", init); };
  }, []);

  useEffect(() => {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const text = 'Follow the white rabbit...';
    let i = 0;
    el.innerHTML = '';
    const type = () => {
      if (i < text.length) {
        el.innerHTML = text.slice(0, ++i) + '<span style="display:inline-block;animation:blink 1s infinite">▋</span>';
        setTimeout(type, Math.random() * 100 + 50);
      }
    };
    const timer = setTimeout(type, 1500);
    return () => clearTimeout(timer);
  }, []);

  const tickers = [
    {name:"BTC/USDC",price:"$78,176",change:"+0.11%",up:true},
    {name:"ETH/USDC",price:"$2,173",change:"-2.36%",up:false},
    {name:"SOL/USDC",price:"$86.36",change:"-2.86%",up:false},
    {name:"BNB/USDC",price:"$598.2",change:"+1.24%",up:true},
    {name:"ARB/USDC",price:"$0.412",change:"+3.15%",up:true},
    {name:"WIF/USDC",price:"$1.234",change:"+5.32%",up:true},
    {name:"PEPE/USDC",price:"$0.000012",change:"+8.14%",up:true},
    {name:"DOGE/USDC",price:"$0.172",change:"-1.44%",up:false},
  ];
  const doubled = [...tickers,...tickers,...tickers,...tickers];

  return (
    <div style={{background:"#080808",color:"#00ff41",fontFamily:"'Share Tech Mono',monospace",overflowX:"hidden",minHeight:"100vh"}}>
      <canvas ref={canvasRef} style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,opacity:0.22,pointerEvents:"none"}} />

      {/* SCANLINES */}
      <div style={{position:"fixed",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)",pointerEvents:"none",zIndex:2}} />

      {/* HERO */}
      <section id="trade" style={{position:"relative",zIndex:10,minHeight:"100vh",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",gap:"4rem",padding:"8rem 5rem 5rem",maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"1.8rem"}}>
          <div style={{fontSize:"0.85rem",letterSpacing:"0.35em",color:"#00cc33",textTransform:"uppercase",fontFamily:"'Share Tech Mono',monospace"}} id="typewriter"></div>
          <h1 style={{fontFamily:"'Orbitron',monospace",fontSize:"clamp(2.2rem,4.5vw,3.8rem)",fontWeight:900,lineHeight:1.05,color:"#fff"}}>
            TRADE WITHOUT<br/>
            <span style={{color:"#00ff41",textShadow:"0 0 20px #00ff41,0 0 50px rgba(0,255,65,0.4)"}}>LIMITS</span>
          </h1>
          <p style={{fontSize:"0.88rem",lineHeight:1.9,color:"#ffffff",maxWidth:"480px"}}>
            WynnDEX is a high-performance perpetuals exchange built for serious traders. Deep liquidity. Zero compromises. Your keys, your trades.
          </p>
          <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
            <a href="/perp" style={{fontFamily:"'Orbitron',monospace",fontSize:"0.85rem",fontWeight:900,letterSpacing:"0.2em",padding:"1rem 2.5rem",background:"#00ff41",color:"#000",textDecoration:"none",textTransform:"uppercase",clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",animation:"pulse 2s ease-in-out infinite",display:"inline-block"}}>{"ENTER DEX "}<span style={{fontSize:"1.45em"}}>🐇</span></a>
            <a href="#features" style={{fontSize:"0.8rem",letterSpacing:"0.15em",padding:"0.9rem 1.8rem",background:"transparent",border:"1px solid rgba(0,255,65,0.2)",color:"rgba(0,255,65,0.6)",textDecoration:"none",textTransform:"uppercase",clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)"}}>Learn More</a>
          </div>
        </div>

        {/* VAULT LOGO */}
        <div style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{position:"relative",width:"400px",height:"400px"}}>
            <div style={{position:"absolute",inset:"-50px",borderRadius:"50%",border:"2px solid rgba(0,255,65,0.15)",boxShadow:"0 0 30px rgba(0,255,65,0.05),inset 0 0 30px rgba(0,255,65,0.05)",animation:"spin 30s linear infinite reverse"}} />
            <div style={{position:"absolute",inset:"-36px",borderRadius:"50%",border:"1px dashed rgba(0,255,65,0.2)",animation:"spin 20s linear infinite"}} />
            <div style={{position:"absolute",inset:"-18px",borderRadius:"50%",border:"1px solid rgba(0,255,65,0.35)",boxShadow:"0 0 15px rgba(0,255,65,0.1)",animation:"spin 10s linear infinite reverse"}} />
            <div style={{position:"absolute",inset:"-18px",borderRadius:"50%",background:"repeating-conic-gradient(rgba(0,255,65,0.08) 0deg 2deg, transparent 2deg 30deg)",animation:"spin 10s linear infinite reverse"}} />
            <div style={{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle at 35% 35%, rgba(0,40,15,0.95) 0%, rgba(0,0,0,0.98) 70%)",border:"2px solid rgba(0,255,65,0.4)",boxShadow:"0 0 40px rgba(0,255,65,0.2),0 0 80px rgba(0,255,65,0.08),inset 0 0 40px rgba(0,255,65,0.05)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
              <img src="/logo-icon.png" alt="WynnDEX" style={{width:"65%",height:"65%",objectFit:"contain",filter:"drop-shadow(0 0 12px rgba(0,255,65,0.8)) drop-shadow(0 0 30px rgba(0,255,65,0.4))"}} />
            </div>
            <div style={{position:"absolute",top:"-6px",left:"50%",transform:"translateX(-50%)",width:"12px",height:"12px",borderRadius:"50%",background:"rgba(0,255,65,0.5)",boxShadow:"0 0 8px rgba(0,255,65,0.6)"}} />
            <div style={{position:"absolute",bottom:"-6px",left:"50%",transform:"translateX(-50%)",width:"12px",height:"12px",borderRadius:"50%",background:"rgba(0,255,65,0.5)",boxShadow:"0 0 8px rgba(0,255,65,0.6)"}} />
            <div style={{position:"absolute",left:"-6px",top:"50%",transform:"translateY(-50%)",width:"12px",height:"12px",borderRadius:"50%",background:"rgba(0,255,65,0.5)",boxShadow:"0 0 8px rgba(0,255,65,0.6)"}} />
            <div style={{position:"absolute",right:"-6px",top:"50%",transform:"translateY(-50%)",width:"12px",height:"12px",borderRadius:"50%",background:"rgba(0,255,65,0.5)",boxShadow:"0 0 8px rgba(0,255,65,0.6)"}} />
          </div>
          <div style={{position:"absolute",bottom:"-55px",left:"50%",transform:"translateX(-50%)",textAlign:"center",whiteSpace:"nowrap"}}>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:"1rem",fontWeight:700,color:"#fff",letterSpacing:"0.15em"}}>WYNN<span style={{color:"#00ff41"}}>DEX</span></div>
            <div style={{fontSize:"0.62rem",letterSpacing:"0.2em",color:"#00cc33",textTransform:"uppercase",marginTop:"0.25rem"}}>Non-Custodial · Your Keys · Your Trades</div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{position:"relative",zIndex:10,background:"rgba(0,0,0,0.92)",borderTop:"1px solid rgba(0,255,65,0.2)",borderBottom:"1px solid rgba(0,255,65,0.2)",overflow:"hidden",padding:"0.65rem 0"}}>
        <div style={{display:"flex",gap:"4rem",animation:"ticker 35s linear infinite",whiteSpace:"nowrap"}}>
          {doubled.map((t,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:"0.6rem",fontSize:"0.75rem",color:"rgba(0,255,65,0.65)"}}>
              <span style={{color:"#fff"}}>{t.name}</span>
              <span>{t.price}</span>
              <span style={{color:t.up?"#00ff41":"#ff4444"}}>{t.up?"▲":"▼"} {t.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" style={{position:"relative",zIndex:10,padding:"4rem 5rem 6rem",maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"3.5rem"}}>
          <div style={{fontSize:"0.62rem",letterSpacing:"0.3em",color:"#00cc33",textTransform:"uppercase",marginBottom:"0.5rem"}}>// Why WynnDEX</div>
          <h2 style={{fontFamily:"'Orbitron',monospace",fontSize:"1.8rem",fontWeight:900,color:"#fff"}}>BUILT FOR WYNNERS</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
          {[
            ["⚡","Lightning Execution","Sub-millisecond order execution powered by Orderly Network's omnichain infrastructure. No slippage. No excuses."],
            ["🔒","Non-Custodial","Your funds never leave your wallet. Trade with full self-custody on Ethereum, Arbitrum, Base, Solana and 14+ chains."],
            ["📈","Up to 100x Leverage","Amplify your positions with industry-leading leverage. Trade perpetuals on BTC, ETH, SOL and 60+ markets."],
            ["💧","Deep Liquidity","Shared omnichain liquidity means tight spreads and massive order books from day one."],
            ["💰","Keep Your Fees","Set your own trading fees. Every trade on WynnDEX generates revenue that flows directly back to you."],
            ["🛡️","Battle-Tested","Built on Orderly Network — powering over $11B in cumulative trading volume across 62+ markets."],
          ].map(([icon,title,desc])=>(
            <div key={title as string} style={{background:"rgba(0,0,0,0.75)",border:"1px solid rgba(0,255,65,0.2)",padding:"2rem",clipPath:"polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)"}}>
              <div style={{fontSize:"1.8rem",marginBottom:"1rem"}}>{icon}</div>
              <div style={{fontFamily:"'Orbitron',monospace",fontSize:"1rem",fontWeight:700,color:"#00ff41",marginBottom:"0.8rem",letterSpacing:"0.08em",textShadow:"0 0 10px rgba(0,255,65,0.4)"}}>{title}</div>
              <p style={{fontSize:"0.77rem",lineHeight:1.9,color:"#ffffff"}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO */}
      <section id="about" style={{position:"relative",zIndex:10,padding:"6rem 5rem",maxWidth:"1400px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.3fr",gap:"5rem",alignItems:"center"}}>
        <div>
          <div style={{fontSize:"0.62rem",letterSpacing:"0.3em",color:"#00cc33",textTransform:"uppercase",marginBottom:"1rem"}}>// Leadership</div>
          <h2 style={{fontFamily:"'Orbitron',monospace",fontSize:"2rem",fontWeight:900,color:"#fff",marginBottom:"0.4rem"}}>JAMES WYNN</h2>
          <div style={{fontSize:"0.72rem",letterSpacing:"0.2em",color:"#00ff41",textTransform:"uppercase",marginBottom:"2rem"}}>Founder, CEO & Chief Trader</div>
          <p style={{fontSize:"0.83rem",lineHeight:2,color:"#ffffff",marginBottom:"2rem"}}>
            James Wynn is a high-stakes crypto trader known for turning conviction, timing, and calculated aggression into some of the most talked-about trades in the digital asset space.<br/><br/>
            In just two months, he turned a small amount of capital into an astonishing <strong style={{color:"#00ff41"}}>$87,000,000</strong>. His conviction translated into profits exceeding <strong style={{color:"#00ff41"}}>$25,000,000</strong> in meme coin trades alone — cementing his reputation as one of the sharpest traders in crypto.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
            {[["$1.26B","Largest BTC Long Position in History"],["$87M","Profit in 60 Days"],["$25M+","Meme Coin Trading Profits"],["#1","Most Talked-About Crypto Trader"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(0,255,65,0.04)",border:"1px solid rgba(0,255,65,0.2)",padding:"1.2rem",clipPath:"polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px)"}}>
                <div style={{fontFamily:"'Orbitron',monospace",fontSize:"1.2rem",fontWeight:700,color:"#00ff41",marginBottom:"0.3rem"}}>{v}</div>
                <div style={{fontSize:"0.62rem",letterSpacing:"0.1em",color:"#ffffff",textTransform:"uppercase",lineHeight:1.5}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{position:"relative",display:"flex",justifyContent:"center"}}>
          <img src="/wynn-avatar.jpeg" alt="James Wynn" style={{width:"100%",maxWidth:"460px",height:"500px",objectFit:"cover",objectPosition:"top",border:"1px solid rgba(0,255,65,0.2)",clipPath:"polygon(0 0,calc(100% - 30px) 0,100% 30px,100% 100%,30px 100%,0 calc(100% - 30px))"}} />
        </div>
      </section>

      {/* CTA */}
      <section style={{position:"relative",zIndex:10,textAlign:"center",padding:"5rem 2rem 6rem",borderTop:"1px solid rgba(0,255,65,0.2)"}}>
        <div style={{fontSize:"0.62rem",letterSpacing:"0.3em",color:"#00cc33",textTransform:"uppercase",marginBottom:"1rem"}}>Ready to enter the matrix?</div>
        <h2 style={{fontFamily:"'Orbitron',monospace",fontSize:"clamp(1.5rem,4vw,2.8rem)",fontWeight:900,color:"#fff",marginBottom:"1rem"}}>
          START TRADING <span style={{color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>TODAY</span>
        </h2>
        <p style={{fontSize:"0.85rem",color:"rgba(0,255,65,0.5)",marginBottom:"2.5rem",letterSpacing:"0.1em"}}>Join the traders who see the market differently.</p>
        <a href="/perp" style={{fontFamily:"'Orbitron',monospace",fontSize:"1rem",fontWeight:900,letterSpacing:"0.2em",padding:"1.1rem 3rem",background:"#00ff41",color:"#000",textDecoration:"none",textTransform:"uppercase",clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",animation:"pulse 2s ease-in-out infinite",display:"inline-block"}}>{"ENTER DEX "}<span style={{fontSize:"1.45em"}}>🐇</span></a>
      </section>

      {/* FOOTER */}
      <footer style={{position:"relative",zIndex:10,background:"rgba(0,0,0,0.95)",borderTop:"1px solid rgba(0,255,65,0.2)",padding:"2rem 5rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:"1rem",color:"#00ff41"}}>Wynn<span style={{color:"#fff"}}>DEX</span></span>
        <span style={{fontSize:"0.62rem",color:"#ffffff",letterSpacing:"0.08em"}}>© 2025 WynnDEX. All rights reserved. Trading involves risk.</span>
        <div style={{display:"flex",gap:"1.5rem"}}>
          {["Twitter","Discord","Telegram","Docs"].map(l=>(
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');

        .footer-link {
          font-size: 0.62rem;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 0.1em;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background: #00ff41;
          box-shadow: 0 0 8px #00ff41;
          transition: width 0.3s ease;
        }
        .footer-link:hover {
          color: #00ff41;
          text-shadow: 0 0 10px #00ff41, 0 0 20px rgba(0,255,65,0.5);
        }
        .footer-link:hover::after {
          width: 100%;
        }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse {
          0%,100% { box-shadow:0 0 15px rgba(0,255,65,0.5),0 0 30px rgba(0,255,65,0.2); transform:scale(1); }
          50% { box-shadow:0 0 35px rgba(0,255,65,0.9),0 0 70px rgba(0,255,65,0.5); transform:scale(1.05); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes ticker { to { transform:translateX(-50%); } }
      `}</style>
    </div>
  );
}
