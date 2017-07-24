export default function () {
  const Bem = window.Bem
  Bem._config.APIServerURL = 'http://wxapi.bemcloud.com'
  if (!Bem._inited) {
    Bem.init({
      appId: '2knu8AhtZ8LC8dcaXHBPky3sA7YbouYY',
      javascriptKey: 'broUV99MXZmbsiouvrm76fd8vhjqbtoN'
    })
    Bem._inited = true
  }
  return Bem
}
