<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="Stylesheet" type="text/css" href="style.css">
    <script src="js/jquery-3.3.1.js" type="text/javascript"></script>
    <title>Pizza order</title>
    <script type="module" src="js/view.js" type="text/javascript"></script>
    <script type="module" src="js/setCookie.js" type="text/javascript"></script>
</head>
<body>
  <div id="app">
      <div id="overlay"></div>
      <section class="content">
        <h1>Zamów pizzę</h1>
        <p>Witaj w kreatorze pizzy.<br>W kolejnych etapach będziesz miał do wyboru najważniejsze elementy pizzy. W każdym momencie możliwy jest powrót do poprzedniego elementu. Poniższe przyciski służą do nawigacji. Aby kontynuować wciśnij przycisk "Dalej".</p>
      </section>

      <section class="content">
        <h1>Wybierz rozmiar</h1>
        <select name="size" required>
          <option value="">Wybierz rozmiar z listy...</option>
          <option value="xs">Mini 18cm</option>
          <option value="s">Mała 24cm</option>
          <option value="m">Średnia 28cm</option>
          <option value="l">Duża 34cm</option>
          <option value="xl">XL 40cm</option>
          <option value="xxl">Gigant 52cm</option>
        </select>
      </section>

      <section class="content">
        <h1>Wybierz ciasto</h1>
        <fieldset>
          <input id="pan1" type="radio" name="pan" value="standard"><label for="pan1"><span></span>Standardowe</label>
          <input id="pan2" type="radio" name="pan" value="american"><label for="pan2"><span></span>American Pan</label>
          <input id="pan3" type="radio" name="pan" value="thin"><label for="pan3"><span></span>Cienkie</label>
      </section>

      <section class="content">
        <h1>Wybierz składniki</h1>
        <p>--wybór składników-- --wybór składników-- --wybór składników-- </p>
      </section>

<form>
      <section class="content">
        <h1>Szczegóły zamówienia</h1>
        <p>--szczegóły zamówienia-- --szczegóły zamówienia-- --szczegóły zamówienia-- </p>
      </section>
</form>

      <section id="order-finish">
        <h1>Gotowe!</h1>
        <p>Twoje zamówienie zostało potwierdzone. Dziękujemy za skorzystanie z naszej oferty.</p>
      </section>

      <section id="nav">
        <button id="nav-back">Wstecz</button>
        <div id="nav-pagecounter"></div>
        <button id="nav-next">Dalej</button>
      </section>
  </div>
</body>
</html>