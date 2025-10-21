body {
  font-family: 'Helvetica Neue', sans-serif;
  margin: 0;
  background: #fdfdfd;
  color: #222;
}

header {
  background: #111;
  color: white;
  padding: 20px;
  text-align: center;
}

nav a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}

section {
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.gallery img {
  width: 100%;
  border-radius: 8px;
}

footer {
  text-align: center;
  padding: 20px;
  background: #111;
  color: #fff;
  font-size: 0.9em;
}
