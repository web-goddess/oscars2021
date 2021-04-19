import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './oscar2021.png';

import {Container, Button, Form} from 'react-bootstrap';

import Amplify from "aws-amplify";
import { API} from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addEntry(event) {
  if (formState.name === '') {
    alert('Your name is a required field.');;
    return;
  }
  if (formState.email === '') {
    alert('Your email address is a required field.');;
    return;
  }
  event.target.disabled = true;
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      bestactor: formState.bestactor,
      bestsuppactor: formState.bestsuppactor,
      bestactress: formState.bestactress,
      bestsuppactress: formState.bestsuppactress,
      animated: formState.animated,
      documentary: formState.documentary,
      international: formState.international,
      musicscore: formState.musicscore,
      musicsong: formState.musicsong,
      writingadapted: formState.writingadapted,
      writingoriginal: formState.writingoriginal,
      director: formState.director,
      bestpicture: formState.bestpicture,
      deadpeople: formState.deadpeople
    }
  };

  console.log(data);
  const apiData = await API.post('oscarsapi', '/entry', data);
  console.log({ apiData });
  event.target.innerText="Saved!";
  alert('Entry saved');
}

const formState = { name: '', email: '', bestactor: '', bestsuppactor: '', bestactress: '', bestsuppactress: '', animated: '', documentary: '', international: '', musicscore: '', musicsong: '', writingadapted: '', writingoriginal: '', director: '', bestpicture: '', deadpeople: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

function App() {
  return (
    <Container>
      <div>
        <div align="center">
        <p><img src={logo} alt="Web-Goddess Oscar Contest 2021" className="logo" /></p>
        <h3>Enter the 2021 W-G Oscars Contest</h3>
        </div>
        <br/>
        <p><strong>The Rules:</strong></p>
        <ol><li> Your name and email address are required. Your email address is only used to contact the winner for shipping information, then all data will be deleted.</li>
        <li> You can enter more than once if you like, but only your final entry will count.</li>
        <li> Once all the categories are announced, the winner will be the person whose final entry predicted the most categories correctly.</li>
        <li> In the event of a tie, the tie-breaker will be whoever comes closest to the number of celebrities featured in the "In Memoriam" reel.</li>
        <li> If that still doesn't break the tie, the winner will be whoever's entry was submitted first.</li>
        <li> The winner will receive one custom-made set of four sock monkeys modelled after the Rose family from <em>Schitt's Creek</em>!</li>
        <li> If the winner's email address is invalid or they don't respond within a week, I reserve the right to send the prize to the next highest scoring entry.</li>
        <li> It's absolutely free to enter, and I'll bear the cost of shipping the monkeys to you. Just pay it forward sometime, okay?</li></ol>
        <Form>
          <Form.Group controlId="Form.Name">
            <Form.Label>Name: *</Form.Label>
            <Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group>
          <Form.Group controlId="Form.Email">
            <Form.Label>Email: *</Form.Label>
            <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <Form.Group controlId="Form.BestActor">
            <Form.Label>Actor in a Leading Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestactor', e.target.value)} >
              <option>Please select...</option>
              <option>Riz Ahmed, Sound of Metal</option>
              <option>Chadwick Boseman, Ma Rainey's Black Bottom</option>
              <option>Anthony Hopkins, The Father</option>
              <option>Gary Oldman, Mank</option>
              <option>Steven Yeun, Minari</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestSuppActor">
            <Form.Label>Actor in a Supporting Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestsuppactor', e.target.value)} >
              <option>Please select...</option>
              <option>Sacha Baron Cohen, The Trial of the Chicago 7</option>
              <option>Daniel Kaluuya, Judas and the Black Messiah</option>
              <option>Leslie Odom, Jr., One Night in Miami...</option>
              <option>Paul Raci, Sound of Metal</option>
              <option>Lakeith Stanfield, Judas and the Black Messiah</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestActress">
            <Form.Label>Actress in a Leading Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestactress', e.target.value)} >
              <option>Please select...</option>
              <option>Viola Davis, Ma Rainey's Black Bottom</option>
              <option>Andra Day, The United States vs. Billie Holiday</option>
              <option>Vanessa Kirby, Pieces of a Woman</option>
              <option>Frances McDormand, Nomadland</option>
              <option>Carey Mulligan, Promising Young Woman</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestSuppActress">
            <Form.Label>Actress in a Supporting Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestsuppactress', e.target.value)} >
              <option>Please select...</option>
              <option>Maria Bakalova, Borat Subsequent Moviefilm</option>
              <option>Glenn Close, Hillbilly Elegy</option>
              <option>Olivia Colman, The Father</option>
              <option>Amanda Seyfried, Mank</option>
              <option>Yuh-Jung Youn, Minari</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestAnimated">
            <Form.Label>Animated Film: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('animated', e.target.value)} >
              <option>Please select...</option>
              <option>Onward, Dan Scanlon and Kori Rae</option>
              <option>Over the Moon, Glen Keane, Gennie Rim and Peilin Chou</option>
              <option>A Shaun the Sheep Movie: Farmageddon, Richard Phelan, Will Becher and Paul Kewley</option>
              <option>Soul, Pete Docter and Dana Murray</option>
              <option>Wolfwalkers, Tomm Moore, Ross Stewart, Paul Young and Stéphan Roelants</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestDocumentary">
            <Form.Label>Documentary (Feature): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('documentary', e.target.value)} >
              <option>Please select...</option>
              <option>Collective, Alexander Nanau and Bianca Oana</option>
              <option>Crip Camp, Nicole Newnham, Jim LeBrecht and Sara Bolder</option>
              <option>The Mole Agent, Maite Alberdi and Marcela Santibáñez</option>
              <option>My Octopus Teacher, Pippa Ehrlich, James Reed and Craig Foster</option>
              <option>Time, Garrett Bradley, Lauren Domino and Kellen Quinn</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestInternational">
            <Form.Label>International Feature Film: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('international', e.target.value)} >
              <option>Please select...</option>
              <option>Another Round, Denmark</option>
              <option>Better Days, Hong Kong</option>
              <option>Collective, Romania</option>
              <option>The Man Who Sold His Skin, Tunisia</option>
              <option>Quo Vadis, Aida?, Bosnia and Herzegovina</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestMusicScore">
            <Form.Label>Music (Score): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('musicscore', e.target.value)} >
              <option>Please select...</option>
              <option>Da 5 Bloods, Terence Blanchard</option>
              <option>Mank, Trent Reznor and Atticus Ross</option>
              <option>Minari, Emile Mosseri</option>
              <option>News of the World, James Newton Howard</option>
              <option>Soul, Trent Reznor, Atticus Ross and Jon Batiste</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestMusicSong">
            <Form.Label>Music (Original Song): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('musicsong', e.target.value)} >
              <option>Please select...</option>
              <option>"Fight For You" from Judas and the Black Messiah</option>
              <option>"Hear My Voice" from The Trial of the Chicago 7</option>
              <option>"Husavik" from Eurovision Song Contest: The Story of Fire Saga</option>
              <option>"Io Sì (Seen)" from The Life Ahead (La Vita Davanti a Se)</option>
              <option>"Speak Now" from One Night in Miami...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestWritingAdapted">
            <Form.Label>Writing (Adapted Screenplay): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('writingadapted', e.target.value)} >
              <option>Please select...</option>
              <option>Borat Subsequent Moviefilm, screenplay by Sacha Baron Cohen et al.</option>
              <option>The Father, screenplay by Christopher Hampton and Florian Zeller</option>
              <option>Nomadland, written for the screen by Chloé Zhao</option>
              <option>One Night in Miami..., screenplay by Kemp Powers</option>
              <option>The White Tiger, written for the screen by Ramin Bahrani</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestWritingOriginal">
            <Form.Label>Writing (Original Screenplay): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('writingoriginal', e.target.value)} >
              <option>Please select...</option>
              <option>Judas and the Black Messiah, screenplay by Will Berson & Shaka King</option>
              <option>Minari, written by Lee Isaac Chung</option>
              <option>Promising Young Woman, written by Emerald Fennell</option>
              <option>Sound of Metal, screenplay by Darius Marder & Abraham Marder</option>
              <option>The Trial of the Chicago 7, written by Aaron Sorkin</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestDirector">
            <Form.Label>Director: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('director', e.target.value)} >
              <option>Please select...</option>
              <option>Another Round, Thomas Vinterberg</option>
              <option>Mank, David Fincher</option>
              <option>Minari, Lee Isaac Chung</option>
              <option>Nomadland, Chloé Zhao</option>
              <option>Promising Young Woman, Emerald Fennell</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestPicture">
            <Form.Label>Best Picture: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestpicture', e.target.value)} >
              <option>Please select...</option>
              <option>The Father</option>
              <option>Judas and the Black Messiah</option>
              <option>Mank</option>
              <option>Minari</option>
              <option>Nomadland</option>
              <option>Promising Young Woman</option>
              <option>Sound of Metal</option>
              <option>The Trial of the Chicago 7</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.InMemoriam">
            <Form.Label>Tiebreaker: how many people will be featured in the "In Memoriam" reel of Academy members who passed away last year?</Form.Label>
            <Form.Control placeholder="Number" onChange={e => updateFormState('deadpeople', e.target.value)} />
          </Form.Group>
          <Button onClick={addEntry}>Submit your entry</Button>
        </Form>
        &nbsp;
      </div>
    </Container>
  );
}


export default App;
