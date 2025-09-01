setCps(160/60/4)
//Sliders
//Bass line

const KICK_DRUM = s("tr909_bd").struct("x x x x").distort("3:.3").room(".5").lpf("300")
.duck("2:3:4").duckattack(.2).duckdepth(.8)
const SNARE_DRUM = s("tr909_sd").struct("~ x ~ x").distort("4:.2").gain(".3")
const BASS_LINE = note("<[b#,d,g] [d,f,a] [bb,d,f,a] [bb,d,f]>!16")
  .s("sawtooth, square:0:.1").lpf("200").lpenv("3.912:0:8")
  .lpq(12).decay(".6").room(".3").orbit(2)

const piana = note("<[b#,d,g] [d,f,a] [bb,d,f,a] [bb,d,f]>").vib("8:12").fm("3").fmdecay("0.5").fmsustain(.2).gain(.5)

stack(KICK_DRUM, SNARE_DRUM, BASS_LINE, piana)
