import { blueGrey500, red500, white } from 'material-ui/styles/colors'

const description =
  'You must set the following address for your instance: `10.0.N.3`\\\n' +
  '**N** stands for your team number. **Do not forget** to regenerate MAC address!\\\n\\\n' +
  'Flags are stored into so-called capsules. A capsule looks like this:\\\n' +
  '```RCC{eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJmbGFnIjoiNDIyOWQ2OTFiMDdiMTMzNDFkYTUzZjE3YWI5ZjI0MTY9IiwiZXhwaXJlcyI6IjIwMTctMDUtMTNUMTA6NTE6MDQrMDM6MDAifQ.GaLtzvxoLtA5XZL5cF-M24NFBkcjBWi_1EpAnE8fexrtN3mjeZe3Faw6UgEIb4F5yCpERZVUdQ8fTjkmVlK-ng}```\\\n\\\n' +
  'Data between `RCC{` and `}` is a [JSON Web Token](https://jwt.io) signed using ES256 algorithm. You will need our [public key](/api/public_key) to decode a capsule and get a flag from it. Flag format is `^[\\da-f]{32}=$`.\\\n\\\n' +
  'You should submit flags (**not capsules!**) to `2017.rcc.zone`. You are allowed to submit **no more** than 250 flags in 60-second period.\\\n\\\n' +
  'Each flag lives for 5 minutes. New round is triggered every 2 minutes. Every minute the system randomly chooses 2 living flags and tries to extract them from each service.\\\n\\\n' +
  'Below are some links which you may find useful:\n' +
  '- [Themis Finals Attack Protocol](https://github.com/themis-project/themis-finals-attack-protocol) - attack protocol\n' +
  '- [themis.finals.attack.helper](https://github.com/themis-project/themis-finals-attack-helper-py) - attack helper library for Python 2 & 3'

export default {
  contestTitle: 'RCC–2017',
  primary1Color: blueGrey500,
  accent1Color: red500,
  headerColor: white,
  indexTitle: 'Hello there!',
  indexDescription: description,
  contestLogo: {
    src: 'src/images/rcc-logo.svg',
    style: {
      height: '45px',
      marginTop: '10px',
      marginRight: '20px'
    },
    dist: '/assets/images/rcc-logo.svg'
  },
  contestNotifyLogo: {
    src: 'src/images/rcc-notify-logo.png',
    dist: '/assets/images/rcc-notify-logo.png'
  }
}
