class Team {
  constructor (nav) {
    this.team = document.getElementById('root')
    this.navbar = nav
  }

  content () {
    return `
      ${navbar}
      <div class="container center">
        <div class="header-container">
          <span>TEAM</span>
        </div>

        <div class="container-x">
          <h1>JUGHEAD FILM</h1>
          <h5>Is a film collective created by Emma Horwitz and Claire Siebers in 2016 with the express purpose of making movies together.</h5>
        </div>

        <div class="container-x">
          <img class="headshot" src="media/images/temp.png" alt="Headshot">
          <h1>TIFFANY CLIFTON</h1>
          <h5>Studied Television, Film and Theater at Brooklyn College. She is honored to have worked with this incredible cast and crew of Power Lunch. Credits: [Theater] "Conversation with Death" (SF Theater Festival) "Monster" by Sabrina Paterson(Fringe Festival) ""Busted", "Chez Moi" and "Daughter/Father" written by Florencia Lozano. [Television] "Sesame Street."</h5>
        </div>

        <div class="container-x">
          <img class="headshot" src="media/images/JC.png" alt="Headshot">
          <h1>JESS COLES</h1>
          <h5>Is a filmmaker in New York City, where she was born and raised. You can see more of her work at <a href="https://www.jesscoles.com/" target="_blank">jesscoles.com</a>.
          (we have to put more of Jess's work into her bio...like Mary Marie...Emma, maybe you can help with that?</h5>
        </div>

        <div class="container-x">
          <img class="headshot" src="media/images/EH.png" alt="Headshot">
          <h1>EMMA P HORWITZ</h1>
          <h5>is the writer of this project who needs to submit a bio.</h5>
        </div>

        <div class="container-x">
          <img class="headshot" src="media/images/CS.png" alt="Headshot">
          <h1>CLAIRE SIEBERS</h1>
          <h5>Is a Brooklyn-based writer and actor. Writing Credits: Power Lunch, Genius in a Small Town (upcoming). Some Acting Credits include: [Theater:]The Workshop (with Austin Pendleton, softFocus), Pocatello/When You're Here (Williamstown Theatre Festival), Actors Theater of Louisville, Ars Nova, Clubbed Thumb, Lincoln Center, The Whitney Museum, The New Group, The Rattlestick, Under the Radar. [Film] "Other People."</h5>
        </div>

        <div class="container-x">
          <img class="headshot" src="media/images/LF.png" alt="Headshot">
          <h1>LISA REGGIE FRANLIN</h1>
          <h5>Lisa Reggie Franklin is a comedian from New York. She writes and draws a comic called "My Two Lesbian Ants," which you can find on <a href="https://twitter.com/lesbiants" target="_blank">Twitter</a> and <a href="https://www.instagram.com/lesbiantscomic/" target="_blank">Instagram</a>. Lisa has also been published on <a href="http://the-toast.net/2013/07/18/rejected-sitcom-concepts/" target="_blank">The Toast</a> and once got a single joke into The Onion, but for legal reasons can't tell you what the joke was.</h5>
        </div>

        <div class="container-x">
          <img class="headshot" src="media/images/RS.png" alt="Headshot">
          <h1>Ryan SPAHN</h1>
          <h5>Ryan began his off-Broadway career in Branden Jacobs-Jenkins' Pulitzer Prize finalist Gloria at the Vineyard Theatre. He went on to appear in Michael McKeever's Daniel's Husband and Ike Holter's Exit Strategy, both for Primary Stages. His recent regional credits include Moscow Moscow Moscow Moscow Moscow Moscow at Williamstown Theatre Festival, Gloria at Goodman Theatre (TimeOut Theatre Award nomination), Exit Strategy at Philadelphia Theatre Company (Barrymore and DC Metro Arts Award nominations), Tribes at Actors Theatre of Louisville, and Sick at Berkshire Theatre Group. Feature film credits include Woven (LA Film Festival premiere, co-writer), He’s Way More Famous Than You (Slamdance Film Festival premiere, co-writer), and Grantham & Rose (Cleveland International Film Festival premiere, writer). He co-created the digital series What’s Your Emergency (Stage17.tv) and is a writer on Logo’s Cocktails and Classics. Ryan received his BFA from The Juilliard School.</h5>
        </div>

        <div class="container-x">
          <img class="headshot" src="media/images/NK.png" alt="Headshot">
          <h1>NOAH KERNIS</h1>
          <h5>Is... This is hard to do. He like, works in computers - but he did the audio recording for this series. He also built this site. He has also acted (continues to act?) and tells jokes... like a lot of them. OH! He also makes comics - check out his work here: <a href="http://genericerror.me" target="_blank">GENERIC_ERROR</a>. K THX BYE... </h5>
        </div>
      </div>
    `
  }

  render () {
    this.team.innerHTML = this.content(this.navbar)
  }
}
