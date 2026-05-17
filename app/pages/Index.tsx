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

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem 3rem",background:"rgba(0,0,0,0.88)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(0,255,65,0.2)"}}>
        <span style={{fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:"1.5rem",letterSpacing:"0.2em",color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>Wynn<span style={{color:"#fff"}}>DEX</span></span>
        <div style={{display:"flex",gap:"2rem"}}>
          {["Trade","About","Features"].map(l=>(
            <a key={l} href={`#${l.toLowerCase()}`} style={{color:"rgba(0,255,65,0.55)",textDecoration:"none",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase"}}>{l}</a>
          ))}
        </div>
        <a href="/perp" style={{fontFamily:"'Orbitron',monospace",fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.15em",padding:"0.55rem 1.3rem",background:"transparent",border:"1px solid #00ff41",color:"#00ff41",textDecoration:"none",textTransform:"uppercase",clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)"}}>Launch App</a>
      </nav>

      {/* HERO */}
      <section id="trade" style={{position:"relative",zIndex:10,minHeight:"100vh",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",gap:"4rem",padding:"8rem 5rem 5rem",maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"1.8rem"}}>
          <div style={{fontSize:"0.85rem",letterSpacing:"0.35em",color:"#00cc33",textTransform:"uppercase",fontFamily:"'Share Tech Mono',monospace"}} id="typewriter"></div>
<style>{`
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .cursor { display:inline-block; animation:blink 1s infinite; }
`}</style>
<script dangerouslySetInnerHTML={{__html:`
  (function(){
    var el=document.getElementById('typewriter');
    var text='Follow the white rabbit...';
    var i=0;
    function type(){
      if(i<text.length){
        el.innerHTML=text.slice(0,++i)+'<span class="cursor">▋</span>';
        setTimeout(type, i===text.length?0:Math.random()*100+50);
      }
    }
    setTimeout(type,1000);
  })();
`}}/>
          <h1 style={{fontFamily:"'Orbitron',monospace",fontSize:"clamp(2.2rem,4.5vw,3.8rem)",fontWeight:900,lineHeight:1.05,color:"#fff"}}>
            TRADE WITHOUT<br/>
            <span style={{color:"#00ff41",textShadow:"0 0 20px #00ff41,0 0 50px rgba(0,255,65,0.4)"}}>LIMITS</span>
          </h1>
          <p style={{fontSize:"0.88rem",lineHeight:1.9,color:"rgba(0,255,65,0.6)",maxWidth:"480px"}}>
            WynnDEX is a high-performance perpetuals exchange built for serious traders. Deep liquidity. Zero compromises. Your keys, your trades.
          </p>

          <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
            <a href="/perp" style={{fontFamily:"'Orbitron',monospace",fontSize:"0.85rem",fontWeight:900,letterSpacing:"0.2em",padding:"1rem 2.5rem",background:"#00ff41",color:"#000",textDecoration:"none",textTransform:"uppercase",clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",animation:"pulse 2s ease-in-out infinite",display:"inline-block"}}>ENTER DEX <span style={{fontSize:"1.45em"}}>🐇</span></a>
            <a href="#features" style={{fontSize:"0.8rem",letterSpacing:"0.15em",padding:"0.9rem 1.8rem",background:"transparent",border:"1px solid rgba(0,255,65,0.2)",color:"rgba(0,255,65,0.6)",textDecoration:"none",textTransform:"uppercase",clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)"}}>Learn More</a>
          </div>
        </div>

        {/* AVATAR */}
        <div style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{position:"relative",width:"400px",height:"400px"}}>
            <div style={{position:"absolute",inset:"-38px",border:"1px solid rgba(0,255,65,0.1)",borderRadius:"50%",animation:"spin 22s linear infinite reverse"}} />
            <div style={{position:"absolute",inset:"-20px",border:"1px solid rgba(0,255,65,0.25)",borderRadius:"50%",animation:"spin 12s linear infinite"}} />
            <img src="/avatar.jpeg" alt="James Wynn" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%",border:"2px solid rgba(0,255,65,0.3)",boxShadow:"0 0 50px rgba(0,255,65,0.15)"}} />
          </div>
          <div style={{position:"absolute",bottom:"-55px",left:"50%",transform:"translateX(-50%)",textAlign:"center",whiteSpace:"nowrap"}}>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:"1rem",fontWeight:700,color:"#fff",letterSpacing:"0.15em"}}>JAMES WYNN</div>
            <div style={{fontSize:"0.62rem",letterSpacing:"0.2em",color:"#00cc33",textTransform:"uppercase",marginTop:"0.25rem"}}>Founder & CEO · WynnDEX</div>
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

      {/* CEO */}
      <section id="about" style={{position:"relative",zIndex:10,padding:"6rem 5rem",maxWidth:"1400px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.3fr",gap:"5rem",alignItems:"center"}}>
        <div>
          <div style={{fontSize:"0.62rem",letterSpacing:"0.3em",color:"#00cc33",textTransform:"uppercase",marginBottom:"1rem"}}>// Leadership</div>
          <h2 style={{fontFamily:"'Orbitron',monospace",fontSize:"2rem",fontWeight:900,color:"#fff",marginBottom:"0.4rem"}}>JAMES WYNN</h2>
          <div style={{fontSize:"0.72rem",letterSpacing:"0.2em",color:"#00ff41",textTransform:"uppercase",marginBottom:"2rem"}}>Founder, CEO & Chief Trader</div>
          <p style={{fontSize:"0.83rem",lineHeight:2,color:"rgba(0,255,65,0.55)",marginBottom:"2rem"}}>
            James Wynn is a high-stakes crypto trader known for turning conviction, timing, and calculated aggression into some of the most talked-about trades in the digital asset space.<br/><br/>
            In just two months, he turned a small amount of capital into an astonishing <strong style={{color:"#00ff41"}}>$87,000,000</strong>. His conviction translated into profits exceeding <strong style={{color:"#00ff41"}}>$25,000,000</strong> in meme coin trades alone — cementing his reputation as one of the sharpest traders in crypto.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
            {[["$1.26B","Largest BTC Long Position in History"],["$87M","Profit in 60 Days"],["$25M+","Meme Coin Trading Profits"],["#1","Most Talked-About Crypto Trader"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(0,255,65,0.04)",border:"1px solid rgba(0,255,65,0.2)",padding:"1.2rem",clipPath:"polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px)"}}>
                <div style={{fontFamily:"'Orbitron',monospace",fontSize:"1.2rem",fontWeight:700,color:"#00ff41",marginBottom:"0.3rem"}}>{v}</div>
                <div style={{fontSize:"0.62rem",letterSpacing:"0.1em",color:"rgba(0,255,65,0.4)",textTransform:"uppercase",lineHeight:1.5}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{position:"relative",display:"flex",justifyContent:"center"}}>
          <img src="/avatar.jpeg" alt="James Wynn" style={{width:"100%",maxWidth:"460px",height:"500px",objectFit:"cover",objectPosition:"top",border:"1px solid rgba(0,255,65,0.2)",clipPath:"polygon(0 0,calc(100% - 30px) 0,100% 30px,100% 100%,30px 100%,0 calc(100% - 30px))"}} />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{position:"relative",zIndex:10,padding:"4rem 5rem 6rem",maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"3.5rem"}}>
          <div style={{fontSize:"0.62rem",letterSpacing:"0.3em",color:"#00cc33",textTransform:"uppercase",marginBottom:"0.5rem"}}>// Why WynnDEX</div>
          <h2 style={{fontFamily:"'Orbitron',monospace",fontSize:"1.8rem",fontWeight:900,color:"#fff"}}>BUILT FOR WINNERS</h2>
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
            <div key={title as string} style={{background:"rgba(0,255,65,0.04)",border:"1px solid rgba(0,255,65,0.2)",padding:"2rem",clipPath:"polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)"}}>
              <div style={{fontSize:"1.8rem",marginBottom:"1rem"}}>{icon}</div>
              <div style={{fontFamily:"'Orbitron',monospace",fontSize:"0.82rem",fontWeight:700,color:"#fff",marginBottom:"0.8rem",letterSpacing:"0.08em"}}>{title}</div>
              <p style={{fontSize:"0.77rem",lineHeight:1.9,color:"rgba(0,255,65,0.5)"}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{position:"relative",zIndex:10,textAlign:"center",padding:"5rem 2rem 6rem",borderTop:"1px solid rgba(0,255,65,0.2)"}}>
        <div style={{fontSize:"0.62rem",letterSpacing:"0.3em",color:"#00cc33",textTransform:"uppercase",marginBottom:"1rem"}}>Ready to enter the matrix?</div>
        <h2 style={{fontFamily:"'Orbitron',monospace",fontSize:"clamp(1.5rem,4vw,2.8rem)",fontWeight:900,color:"#fff",marginBottom:"1rem"}}>
          START TRADING <span style={{color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>TODAY</span>
        </h2>
        <p style={{fontSize:"0.85rem",color:"rgba(0,255,65,0.5)",marginBottom:"2.5rem",letterSpacing:"0.1em"}}>Join the traders who see the market differently.</p>
        <a href="/perp" style={{fontFamily:"'Orbitron',monospace",fontSize:"1rem",fontWeight:900,letterSpacing:"0.2em",padding:"1.1rem 3rem",background:"#00ff41",color:"#000",textDecoration:"none",textTransform:"uppercase",clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",animation:"pulse 2s ease-in-out infinite",display:"inline-block"}}>⚡ TRADE NOW</a>
      </section>

      {/* FOOTER */}
      <footer style={{position:"relative",zIndex:10,background:"rgba(0,0,0,0.95)",borderTop:"1px solid rgba(0,255,65,0.2)",padding:"2rem 5rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:"1rem",color:"#00ff41"}}>Wynn<span style={{color:"#fff"}}>DEX</span></span>
        <span style={{fontSize:"0.62rem",color:"rgba(0,255,65,0.3)",letterSpacing:"0.08em"}}>© 2025 WynnDEX. All rights reserved. Trading involves risk.</span>
        <div style={{display:"flex",gap:"1.5rem"}}>
          {["Twitter","Discord","Telegram","Docs"].map(l=>(
            <a key={l} href="#" style={{fontSize:"0.62rem",color:"rgba(0,255,65,0.35)",textDecoration:"none",letterSpacing:"0.1em"}}>{l}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
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
