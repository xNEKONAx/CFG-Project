import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Nutrigenetic Company</h1>
      <h2>Company Profile</h2>
      <div class="container">
        <nav>
        <ul class="bar">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">nutrition</a></li>
          <li><a href="#">health and wellness</a></li>
        </ul>
        </nav>
      </div>
      <p>The Nutrigenetic's mission is to empower people of the world to become the best version of themselves by bringing personalised nutrition innovations to everybody, everywhere.

      NGX is formulated to optimise individual nutrition, so individuals can achieve maximum physical and cognitive performance across all their fitness, health and wellbeing goals. We do genetic testing and provide personalised diet plan. Genes matters and so do you.</p>
      <a href="https://www.youtube.com">here is the link</a>

      <button>click me</button>

      <ol>
      <li>food</li>
      <li>nutrition</li>
      <li>genes</li>
      <li>diet plan</li>
      </ol>

      <p className = "RedPara" >Nutrition is a critical part of health and development. Better nutrition is related to improved infant, child and maternal health, stronger immune systems, safer pregnancy and childbirth, lower risk of non-communicable diseases (such as diabetes and cardiovascular disease), and longevity.</p>
      <p className = "BluePara">Precision nutrition evaluates one's DNA, microbiome, and metabolic response to specific foods or dietary patterns to determine the most effective eating plan to prevent or treat disease.</p>

      </header>
    </div>
  );
}

export default App;
