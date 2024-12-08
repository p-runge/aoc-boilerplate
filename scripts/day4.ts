// mask occurences of "&{" if string is not valid to prevent unwanted interpolation
const rawInput = `SXMSMMXMASMSSSSXAMXMXAMXXAAXMAMSAMMXMAMXSAMXMXMMMMSMMXMXMASMMSMMSSSMAXXMSMSSXMASMXSSSXSMMSSSSSXMASXSAMXSMMSSMXXXXXMASXMXMSSSMMSSMSSSMMMMSSXM
SAMAMSMSMSXAAMAAXMSXMSSSXSXMSMMSASASXSMSMSSMSSMXAAMXMASXSAAMAXASAXMASXSASMASMMSMMAMXSAAXAAXAAAASAMAXAXASAAAAMMSMMSMMMASASAMXSAAAAMASMAASMMAS
SAMXSAAXAMMMMMMXAXSAMMAMAMXMAAXSXMASAAMSXAXAAAXSMSSSSXSAMXMMASMMMSXAMSAAXMAMMMAAMASAMXMMMSSMMMMMASMXMMXSMMSXMAAAAAAAXMASMASAMMSMMMAMMMXMAMAM
SAMXSMSMAMAAXSXSSXSAMMAMAMASXSMSXXXMMMMSMMSMMXMSAAAMXXMXMXXMXXXASAMXMSMSMMXXAXXXMAXAMSXXAAMXSAASMMMSXAAXMAXMSMSMMSXMXMMMSXMXSXMMMMXSXSMSSMMS
MSSXMAXMASMSSMAXMAMXMMASAXMXAMAMXMMMXMXMAMXXAXSMMMSMXMMAMMXMAMSMMMSSXSAXMSASXXSXMSSMMSAMMMSAMMMMAAAAMMMSSXMAMAAAAMMSXXAAXXSASAAAXMASAAAAMAXA
XAXASMXSAMAMAMMMMAMASMMMMSXMSMSMSAASXSXSAMAMSMSAXSAMXAAAXMAMAMAAMAAMAMAMAMASAASAMAAXAXAMASMMSSSSSMMSAMAAMAMAMSSMMSAMMSMXXMMASMSMMSAMXMMMSMMM
MMSMMMAMMSXSAMAASAMXMAAAXMAXMAXAMSMSAMASXSXAMASMMXAAXXXMXMMMASMSMMSSSMSMSMAMMMMAAXXMXMMMXMAAAAXAAMAMMMMASMMXXAAAAMAMMAMXMXAAMXMAAMXSASXMAXAX
XAAAAMMSAAASXMSASASXSSMMSMMMSAMSAMXMAMAMMAMSMAMMXSXMSMSASXMSXSAMXMAXMAXXXAXXXASXMASMXSAMSSMMSXMXMMAXXASAMAASMSSMMSSMMASAASMXSAMMMSMSXSASASXS
MSSMMSMMMMMMMMMAXAMAAXMASASASXMXMAMSAMXXSAMXMAMMXSMAAAMSMAASAMXMSXMXMAMSSMMMSASMMXXAASXMAAAMAAMSXSSSMMMSMMMSXAXXXAAXSAXAXMAASXSAMXAXXSAMXSAS
XAAASXXAAMAAXAMSMMMXMMMMXAMAXAMXAMMSXSXMXSSXSAXXASMMMSMAMMMMAMMAMXXXMASXMAAXMAXASMMMMSAMSSMMMXMAAAMAAMAMMMSMMMSMMMSAMAXSAMXMSAXXSMMMAXAMAMMM
MMSMSAXSSSMMMMAXAXMASAXSMSMXSAMXXXAMMMMMAMMMSMSMASXMXMMMMAXSMMSASMSSSXMASXMXMMMAXMAMSSMMMAMXXSSSSMSSMMASAMAAAAAAAAMMMXMAASAXMXXMXMASMMSMMSAS
AXAXMAMMAXAXAMSMSMMAXMXSAXAMSAMXMMMSAAAMAMSAMXAMAXASXMASMMMMMASAMAXAAXSMMMXAAXMXMMMSAMASXAAAAAAAXAXXASASMSSSMSSXMXSXXXMXAMXXSSMMAMMAXSMAXXMA
XSASMMMMAMMSXSAAMAASXSASXMAMMSMASAMXMXXXAXMASXXSSSMMXMASAAXAMMXXMSMMMMMAAAXSXXMSASXMASXMSAMMMMMMMMMSMMXSXXXMAXMMSMSMSMSAMASXSAAAASMMMAMMMSXM
XSAMMAXMMMMSMSMSMSMMAMASASXMAAXXMASAXXSMSSSMMAXAAMAAXXASMMSSSSMSAMASAAXMMMMMAAAAMMASXMXMAXXXAAAMXSASAXMMMSSMXMAXSASAAAXXSAMXMSMMXMAASAMSASAX
AMAMSXSXMASMAMAMMMAMMMXMXAMMXSSMXXMAMSAMXAAMASMMSMSASMXXAASXAAASASAMSSSSSXASMMXMASAMASMMMAMXSSXSAMXSAMSAMXAMASMMMAMSXSXXMAXAXMMSMXSMMMMASXSM
AMMMXAMASMMMAMAMSSMMXSASXMMSAMAMAMMMMXAMMXMAAXMXXAMXXAXXMMSMSMMSAMAXXXAAAMXAXMXMAMASAAAAAAMXMMXMMMXMMMSASXMMXAAAMXMXXMMMSSMMASAAMMMMASMMMMMM
MSSMSAAAXAASMSMSXAXMMSASAAAMASMMASAMMSMMMXXMSSSMMAMXMSMXSAMMASMMMMSSMMMMMXXSXXAMAXAMXSSMSMSAAAXMAMXAMXXMAAXAMSMSXMXMSMAMAMAMAMMMXAASAXMXXAAM
MAAXSAMXMSMSAMXSMXMXAMAMMMXMMMXSMSASAAMAMAXXAAAMSAMAMAAMMAMSAMMAAAXAAAXAXMMMMMMMSXMMAAAAAASMSMSMAMSAMXMXSSMXAMAMMMAXAXAXXXAMASXXSSMMMSSMSSMS
MMSMSXMAMXMMXMAMMSMMXXAMXXSSXSASASAMMXSAMSSMMSMMSMSMSASXXAMMMMSXMXSSSMSMSMAAAASMMASMMSAMMMMAMAMXXXASMMSAAAASMMAMAXSSSXSSMMASASMXAXAAAAAAAAAS
MMAAXAMXXSAMXSSMASMAMXSXSSMASXAMMMMMXMXAMAAXXAXXSXSASAMMMSSMMASMMMXAXXAAAMMMSASAXXMAAAAXMXMAMAMMMSMMXAMMSMMAAMMXSMMAXAMAMSAMAXAMMXSMMXSSMMMS
MSMSMMSAMXAMAMAMAXMASMMAMXMXMMSMSAMSXMSSMSSMMSXXMAMAMAMSAAAXMASASMMAMSMSMSMAMXSAMSMSMSSMSASASASAAXXXMMMMAAMSMMSAMASAMXMAMXMMXMSXSAXMAXMAMMAX
AAXXAAXAXMAMXXAMXXMASAMSMMMSMAXMMAMMAMAMMXAMAXSMMSMSMXMMMSSMXXSAMXMAMXAAAAAMXAMMMAAXAAXASXSAXXSMSMMXMXSSMSXAAAMASMMMSXMAMAXMXXXAAXSXMASAAMAM
SXXMMMSXMMSXMSSSMMMASXXAAAAAMAMMMSMXAMASMXAMXMASAAXMSMXMAXAAXMMMMASAMMSMSMSSMAXMXMXMMMMAMMMMMMXMXASAMAMAAXMMMMSAMMASAASASXSXSAMMMSMMXXMAMMAS
AMSXSAMXSAMXAAAMAMSXMASXXMMSXSAAAXASMSXAMMXXAAXMXSMMAXMXMSMSMXAXSXSASAAAAXAXMAMSMSMXMMXXXAAAXXAMXSMXSASMMMXXAXSXAMMXMAMXAAAAXAAXXXMASMXSAMAM
XMAXMASAMASXMMSMSMSASXXMASXMAMMMMSASAAAMXASXMSMSMMASMMMAMMAMASAMMASAMXSSMMMSMSXSAAAASAMXSMSSMSASMAAASXSAMAMSMMMXSSSSXSMSMMMMMXSMXMMASAAAAMXS
SAMXSAMXSMMXMAXXXASXMXAMXSAMAMXXXMXMXMMXMMAAAAAAASAMXMSASMAMXXXAMMSMMAMAMXXAMMAMSMMMSAAMMMMAMSAAXMMMSASXMAMAAAXAXAAMAAXAXMAXSXMMSAMXMMMMXMXM
MAXAMASXSAMXSASXMAMXSXMAMMAMMMXMMXXXSMSXSMSMMMSMMXXSAMSASXMXAMXMSAMXMXSAMSSMMMAMXSXMXMXSAMSAMXMAXMAXMMMMSSSSSMSXMMMMSXSSSSSSMXAAMXMXSASMMMMS
SXMASMMMSAXXMASAMXXAXASMXXMMXXMSAAMMMMAMSAXAAXXXXSMMAMMAMMSMSSXAMXMXXAXAMMAMXSAMMAMSAMASAMXASMMSMSMSSXAASAAXXAAMMXMAXMAMAMXAMSSMSAAAMAAMAAAX
MAMAMASASAMXMAMXMMMMSAMXXSSSSXAMXMMAAAASMAMSMSMSMMXXXMMMMASAAAMMMSSSMSMSMSMMMMASXAMMMMASAMSSMXAXXXMXMSMSMMMMSSMAAXMXXAXMXMSAXAAASMXXMMMSSMSS
MMMASMMAXXAMMMSMMMAASXMMMAAAMMAMXMMMMSMSMSMXXMASAAASMMXSMASMMXAAAAAXAMAMMMAAMMMMMXSXXMASAMMXAMXMMMMAMSXAAXMAXAXSSXSMXSXSMASXMMSMSASMXSMAXXAX
SASXSXMMMSXXMAAAASMMSASAAMMMMASMSSMSAXAXAAMMSSSMMMXSAMMMMXXAXXSSMXSMSMAXAMSMSASASAAXMAXSAMXMMMAAAAXAXXAXXMMXSAMXAASAMAAAMAMAMAMXMAMXAAMASXMM
AMSAMXMMASAMXSSSMSMXSAMXSXXMXSAAAAAAAMAMMMSAMXAMXMXSXMAMXASXMXMAAXMXMMXSMMMXSASASMAMSXAMAMMAMSSXSSSSSMMSAAAXAMXMMMMSAMXXMASXMASAMSMMAMMXXAAA
SXXAMXMMAXAAMAMAMXAAMAMXXMAMXXMMMMMMMMXMSAMASXMMAXMSASXXMAASMSXMSMXAXSASXSAAMXMXMASMXXXXAMAMXAXMXAXAAMAAXMMSAMMXSXXAXXMXXAXAMXSAMAAMMXMAXSMM
ASXSMXMMSSMXMAMAMMMASAMXMSMXXSXMAXAXMXAAAASAMAASASASXMAASXMXXAAXAXSMMMXMASMXXAMXSAXXSMMSMSSXMASMMSMXMMMXXMXMAXSAMXMMMAMXSSMSMMMMSSMMMAMSMXAA
MAMAAXXAMAMASMSSMMXMMASXMAMXMASASXSSMMSMSAMXSSMMMMAMMMMMMAASMSSMMXXXASAMXMMMSSSMMASAMAXMXAMXMSAMXMASMSSMSSSSMMMASMAAMAXAAAAXMAAAMMSXSAAAASXM
XXMAMMMXXAMAAAAAASXMMMMMSASXMASMMXXAXXXAMXMAMMMXXMXMAMXMSMMMAAAAXSASAXXMMAXXAAAAMAMXMSMSASMMXMAMXMAMAAAAMXAAAXSMSMMSMSSSMMMMSSSMSAAMSMSMXMAA
XXASASXASXMSSMMSMMAMASXXSAXXSAMASXSSMMMMMAMXMAMXMMAMXMAAXXXXMMXMMXAMMSSMSAMMMSMMMASAXMAMMXAXAMAMSMMXMXMMMMSMMXMAMMSMAMAXAMXMMMXAMMMXXAXMASXM
XMAXAAXMASAAXMAXAXXMAMAAMAMXMXMAMAAAMAAMSXSSSSMASAMMSAMXMASMXSXMXMXMMAXAAAMXAXAAMXSAMMSMXSAMASAMAAAMSASASAAAXMMAMSASMMAMMMAMAXMXMSMSMSMMMXAA
SXAXXMMXAMMSMMMMAXSMSXSAMAMXAAMSMMMMMSXMXMAXAAMASAAASASAMMMMAXMAMSAMXMMXMMMMXSSMMMSAMAMXAXAMXSXMSSMXSASAMSSSMMSMSMAMXMXMMSMSMSAMXAAXAAAMSSMM
AMXSSMXMXMSAMASMXMMAXAMXSXSMMMXMAMMXXXSSMSMMSMMMXXMASMSASXAMXSMMMMSAAXMMMAXMAXASAASXMXXMSSMMXSAXMAMXMMMAMAMAMAAMXMAMXMSSMSAXMAMXSMSMMMMMAASX
MAXAMXAMMMMASAXAMXMAMAMAAAMXSAMSSMAAXMASAAMMMMSSMXMAMMSAMMSSMMMSAAXXXXMASMSXMMAMMMMASMSMMAMXAXMMSAMXMXSAMXSAMSMMASASAMAAAMXMMSMMXAAXXAAMSXMM
XSMXXSXSAXSAMXSSXMASXXMXSXXAMAXAMXXMMMMMMMSAASAXAXMXSAMAMAXXMSASMSMASMMMXAAXXMAMSASXMAAMMAMMMSXXMAMSAMXMMXMXMMXSAXXMMSSMMMMSAAASMSMSSSSMMASA
SXSAAMMSAMMXMAMXASAMXSMMMAMSSMMSSMSMSAAMMXSMSMMXSAMAMXSAMXSMXMASAMXMMAMAMXMMXMSXSASMASMSSXMAAMXMSXMAMMAXMAMMMMXMMSMSAMXMAASMMSSMAAXXXAMAMAAS
SASMXMAMXMAXMAXMAMXSAMXAMAMAAMAMAXAAXSMSAASXXMXAXAMAXMMAXMAXAMAXMASXSSMAXSAMXAMXMMMXMAXAASMMSSSXSAMSMSSSSSXMAMXAAAXAMASXMXSAMXMASASMMXMAMMMA
MAMXMSSSSSSSSSSMSMMMXSAMXAMXMMASMMMSMXMXMASAMXMXSASXSMSAMSMXXXMXXASXMASAMSAMXSSSXAAXSMMMSMMAXAMASAMMAXAAXAASASXMMMSAMXSAXASMMAXMASXAXMSXSSSM
MAMAAXAAAAXAAAMAAAAAMMASMXMASMXSMMMAAXAMXAXAMAAXSAMXAASXMAMMSAMSMXSASXXXMMAXAXAMMMSXMXMSMMMSMAMAMAMMAMMMMSMMASXASAMXXXSAMXSASMSXXMMMMMMXMAAX
MAXXMMMMMMMMMMMSSSMSSXAAMXXMXMAMAAMMXXSSMMSAMXSAMXMMMMMXSXXASAMXMMSAMMMMSSSMXMMMASMMXAXMAXAMXXMXSAMXXAMAMXAMAMMMMMSMAMMASXSAMXMXAMAMXXXAMSMM
SSSMMAXAXXXSMSXMAAAAMMMMXASXMSSSMMSMSMMAAASXMXMXMAXAXSSMMSMASXMAMAMSMAAAXAXAAMASMSAXXMSSMMSMMMMXAASMSSMAMSAMMSMSAMAAXXMAMMSASAMMSSSSSSSMMAMX
XAAASXMMMAAMMSAMXMAMXMASMMSAAAAMMSAMAASMMMMMMASMSMSSXMAAAXMMMMSASASMSXSXMXMSASASXSXMSMAAAAMAAAMAMMMAAAXAMAMXAAMMASMSMXMAMAMMXAXAAAAAAAMSAAMX
MMMMMMASMSMXAMXMAMXXMSAXAASMMMMMMSASXXMAXXASMXMAMXAMASXMMSMAMASMSXSAMXXXMMXAXMAXAMMAAMSSMMSSMMMMSMXXMSMXMXSMMSMSAMXMASMMMSSSSSMMSSMMMMMAMSMM
ASXSMSASAAAMSSMXXSAAXMSMMMSXMXMAXSAMXMMSMSXSAXMMMMASXMASXXXAMASASMMXMAMAMSXMAXSMASASMXMAXMMMMSMSAMXSAAAASASAXAAMASXMMMAMXMAMAMMMAMMXXXXMAXXA
SXAAXMASMMMMMAXMASMSMAMXMASASXSMMMSMMSMMASASAMSMSAAXMMXSXASMSASMMMSMMASAMAMXMAMXXMAMXSXAMMAAAAMXAMAAMMSMMASMMMSMSXMAXSAMAMAMAMASAMMAMXSMXMAX
MMMMMMAMXXXASAMMAMAXMAMAMAXAMAXSXAXMAAAMSMXMAMAAAMMMSMAMMXMMMMSASAAMSASXSAMAMMSASMAMAMMMSSSMSSSSSMSMXMAAMXMAAXAXMASMMAMSXSXSXSMSASXXXASMSSSM
SAXMASMMXASXMAXMSSSXMSSSMSMSMMMMMMMSSSSMMMAXAMMSMXSAAMSSSSSMSSSXMMXXMASASXSXSAAAMMMMMSMXAAAAXXMAXAMASXSSMMMSMSMSMXMMAMXMASMMXSXMXMASMMMAAAAS
SMMMXMAASMMMXSMAXAMASAAAAXAMXSAXSAAMMAAMXXSSSSMXXAMMASXAAAAAXASAXMXMMMMMMMMXMXMSMXSAMAAMXSMMMSMAMXMASAMAXAXAAAAAAAXMAXXMAMASAMMXSAAXAAMMMXMM
MAAXAXMMSAAMAXMMMAMXMMXMMMASXXASMMXMMMMSXXMAXMXSMASMMSMMMSMMMSMMMMMMAAAAAAXAMXXAAASASMSMMMASAMMXSMSAMAMMMMSMSMSMSMSSXSXMASAMAMAXAMXMSMXSSMAX
XSXSSSMASXMMMMASMMXMAXXXXMSMASXMXMMSSMASMMMAMMASMAAAAXXXAXXXSXSXAAASXSSSSSMMSAMXMMSAMMAMXSAMAXXAXAXXMAMXAXAXAMXAAXXMMMAMAMXSMMSMMSMXMMSAXSXM
MMXAAMAMXXXMXMAMMXAAASMMAXXMAMMAXXAAAMXMAMXMMMAXMSSMMSXMMMMXMASXXXMMXAMMAMXSAMSAXXXMXSAMMMAMXASMMMMMSMMSSSMSAMXXXSAAAMAMASMSXXXAXAXAAXMMMMXM
XMASMMSAMXMXSMMSMSAXMAAXSSSMSSSMMMMSSMSSSMMSXMMSAAAAAXMAMASAMXMASMSSMSMMAMSXAMSMSMAMXMAXMMAMXMAXAMAMASAAAAMAMASAAXMAMSASMMMXMMSMMMSMSMMXMMAA
ASAXXAMAMASAMXMAMMMMMSAMXAAAAMAAXXAMAMAAXMAMAMSSMSSMMSAXSASASAMAMAAXAAXSXSSMMMXMAMAMMSMMSSMSMXMXXXASMSMMXSMMSAMMAMAXMSAMAXMMSAAAMXXAXAXAAXAS
MMAXMXXAXSMMXXSASXSAAXMMMMMMMSSMMMAMAMMXMMSSSMXSAAMAMXXXMXXMMMMSMMMMSSMMXXXAAAASASXMXAAAMAAAXAXXMSASXSASAAXAMXSXMMMMAMMSMMXAMXMMMMMMMSSSSSMM
MMSMMSMXMMASAASMSAMXSXMXASXSAXXAXMASMSXAMMAAXSSMMMSMXMASMSSSSXAAAAXMAMMSSSSSMSMSXSAMSSMMSMMMSASAAMAMASAMSSMXSMSMSAASXMAAXAMSSSSSSXSAAXXMAAAX
XAXAAMMMASAMMMMAMMMMAAMSMSASXMSMMMMAAMXXSSMMMXMAMXMMAXMASAAAXMSSXMSMASXAAMAAAXAMAMAMAAMMAXXXXAXMXMAMAMAMXXXXAAXXMSXMAMSSMMAXXAAAMAXMXXAMSMMM
MMSMMSXAMMMMXXMMMXMMMSMAAMAMAAAXXMMXAMXXMMAMMMSXMASMSSSXAMMMMMMXAASMASMMSMSMMMASMSSMSXMMAMMMMSMMMSASASMMMAMSMMMSMMMSMMXAMXSXMMMMMMMMAMSAMXAA
XXAAAXMSXSMSSXSAMXSAAAXXMMAMMSMSASMSAMXAXSAMAAAASMMMXMAMMSXXXSASMMMMAMAXAMXMAMXAXAXAXMMMXMAAAMAAAXASASXAMAMAMAAAAAAAMXMAMAXASASXAASMASAAMSSM
XSSSXSAXASAAXXMASASMSMSSXSXSXAMAAAASAMSMMSXSMSSMMMSSSSMXAAXMAMMSMAMASXSSXSXSSSMSMMSAMXSAMSSSSSMMSSMMAMMXXAXASMMXSMSMSASAMASMMXSSSXSSXSAMXAMA
XMAAAXAMMMMXSASAMAXXXMXMAMAMXXSMSXAMAAMAMXMSAMXAXSXAAMXMMSSMAMXXXAXAAAXMASXAAXAAAXMXMAMAMAAAAAMMXXXAAMMMSSSMSXSAAAAMSMSXMAXAMAMMMMMMMMAXMASM
MMMMMMXMXAXAXAMSSXMSSMAMAMAMMMXMMMXSMMMAMXAMSMMSMAMMMMAASAXXAMXMXSSMMMMMAMMMMMMXSXMAMXMMMSMXMASMMSMXMAXMAMAAXAAMMMMXSAMXMSSMMAMAAXAMXXXMMAMM
AAXMASAMXXSMXMAMXAMXASMSXSXSXXAAXSMXASXSSSSMAXXMMMASMSASMXXMXSXSAMXMASAXMAMSAAXSMMSASMXXAMXXXXAXAAXMXSMMSSMMMSMSSXXAMAMMMXAXSASXXSAMXXSAMAAX
SMXXAMASXMXXSXSXSMMSMMMMMMXMAMMSASAMXMAXAAXSSXSMAXAMXMMAMMSSXSAMSSXSASXMAMXXXXXAAXSASAAMSMSMMSMMSMMSAMXAAAASXMAAXAMXXSMMSMMMMASAASMSAMSAMXSM
XAAMXSMMAXSAMXMASMXXAAAXSSSMXSAMXXMAMMMMMMMAXAXSMMAMAMSASAXMASMSAMXSAMMSMXMXSSSSXMXMMMMMMAMAAAXMMXAMASMMSSMMAMMMSMXMSMAAXAAAMXMMMMXMAMSAMAXM
AMSSMAMSXMMAAMMAXMXMSSSMAAAAAXXSAMMSXAAAAMSAMSMSXMAXAXSAMASMMMXMAMAMAMMAMMMMAAMXXMXXMMSXMAMSSMSAMXXXAMXMAXASXMAMAMASASMMSSSSSMXXMMMSSMXAMXMX
SXAAMAMMMXSMMMSAMXSMAAMMMMMMMMMXAMXMSSSSSXMASMAMMMMXMMMXMASASMMMSMXMAMXAMAAMMSMMAMAMMAAAMSMMAAXMMSSMASMMAMMMMXAXASMSASMXAMAMAAMXXMASAMSXXXXX
MMSSMXSXXAXASASASASMMXMMXSXASASXSMXXAMXAAXSXMMSMSASASXSAMMSMMXMAXASXSSSSSSXSAMASXSASMMXSMAASMMSXAAAMXMASXSAAAXSXMSXSAMXASMAMXSAMXMXSAMAMMMMS
MAMXMASMMSSMMASMMASXSMSAASMXSXMAAMMMSSMSMMAMXXAXSASASASMSMMXSAMXSAAAAMXMAMAMASAXASAMXMAXMXMMAAXMMSSMXXXAASMMSMMAXXAMXSXMXSMSXMMMMSASAMMAAAAA
MASAMASXAAAAMAMMMSMAXAMMXMAXXMMSMMAAMXXAXMASXSXMMMMAMAMMAXXXMAMAMXMMMMAMAMMSMMASMMSMAXMMAMSXMMSMMAXAMXMMMMXXMASMMMXMAAAXAXXMMMAXAAAMXMXSSSSM
SASXMASMSMSMMMSXSAMXMSMSMSXAAMMMXSMMSASMXMAXMAXSAMMSMXMSASMMSSMMSSMMMSXSASXSASAMXAMSXMXMSMSASXAASMMMAAXXXXXXMAMMASAMXMXMMSXMAMSMSMSSMXXMAMAX
MASAMXSMMXXAMXSMSASAMXAAASMMMMAMMMXSMAMMAMMXSAMXAMAMAMAMAXAAAAMXAXAAMMMXMXXXAMXSASMMSAXXMASAMSSXMAXMSXSXXMASMAMSSSXSSSMAAMXMAXXAXAMAAASXMSSM
SAMXXMSASASASAMAXSMAMMMMSMAXMSMSAMSAMXMXAMMMMASMSMMSAMMMSSMMSSMMSSSMSXAXSSSMAMAMAMAAXSMXMXMXMXMAMMMXAASMSAMXMAMMAMAXAAXMMMXXMXMAMXMMSMMAXAMX
MAXMAXSAMASXMAXAXXXAXXAMAMMMMMXSASMMSMSSMXAASAMMMAAXASXAAMMMAAMXAAAAXMMSMAXSAMASASAMMXXMMMSMMAXAMXSMSXSAXXXMXMXMAMXMXMMXASMAMSMMMAXXXXSSMSSS
SAMASMMXMAMMAMXSSMSMXSASASMSXSAMXMMAMMXAASMXMXSXSMMSMMMMXMAMXAMMMSMMMMMAMMMSXMXMXSASAXMAMAAAMMSSXXMAXAMXMSMSAAMSSMAMMAXSAXSAMXAAMMXMXMXAAAAA
MASMMAAXMASAMXAMAAAMXXAMASMSAMXXXMMASMSMMMMAAAMMMMMAMXSSXSXSASAMXAAAAASMMXXMASASMSAMXSASMSSSMXAMXSMSMMMSXAAMMMMAAMASMMMAMMSMSMSMSSSXAMSMMMSM
SAMXSMMXMASASMSSSSSMMMMMXSAMSMMMSSSMMMAAMASMMAXAAASASXAXAAASAMXSSSSMSAMXSXAASAMXAMXMAMXMXXMAMMASASAAAAAXSMSMSAMXSMXMAAXMMXXXSAAAAAMXXXAMXMAX
MMSASAXXMASAAAAAAAMAAAXMAMXMMSAASASAXXMXSASXXMAMSXSASMSMMMMMAMMMAMXXMMXMAXMXXMXMSMAMMMAMXMMMXSSMAXXAXMSMMXXAMASAAAASXMMXMAMAMSMMMXMASMMSSSMS
SMXAXMMSMASMMMMSMSSSSSSMASXMAMMXSAMXMMSAMXSMMMSAAXMXMAMSXAXAMXMMMMSXSSMSAMSASXMAXSMSSSMSMSAXASAMXMXSAMXAXAMXSAMMSMXAMXSAMAMXXAXASXMMSAXXAAAA
MMMSSMAXAMSAXMXXAAAAAAAMASMSMSMAMAMXMAMASMMXSAMMAMXAMSMSSMXXMAXAXXXAAAXMAMMASXMAXAXAXAAAAMASMSXSXMAMMXSXMSSMMXMAXMMXMASAXXSMSXXXSAAXSXMMSMMM
SXAMAMXMMXMASMMMSMMMSMMMMMAAAAMASAMMXAMSMXAAMAMXAASMSMMMSMASMMSASMMMMMMMAMMXMAMXMMMSSSMSXSAMXMASMMMSMAMMMXAMXAMXSMSXMASMMSMMXSSMSMMMMAAXMXXX
AMSSMMXMSAMXMAAAAXXAAXXSXMSMSMSASASXMSSXAMMMSAMSMMMMAAAAMXXSAAMAMAAXMXSXXSMMSSMAAXAMXAAAAMXMAMXMAMXAMASASXXMSXSMAXSMMMSAMXAAAXMASAMASXMMMMAM
MXAMXMAMAASXSSMMSSMSSSMXAXMAMMMAXXMAAMAMXMAXXMMMXAAXSSMSXMAMMMMXMSMMMASXAMXMAAXSMMSSSMMMSMMMXXSSMMSXMASAMXAXAASMSMMAAAMXMSXMASMAMAMMSMMAMAAX
XMAMAAXXAXAMXAASXMAAMAMXMMXMXSMSMXMMMMASXMASXSAMMSSMXXAAXMAMMMMMMAMXMASMSMAMSSMXAAXXMAXAAXMASMMAXASMMMMXMSMMMSMAXASXMMSAXMAMSAMXSSMAXAXAMSSS
AXSSSSMMMMMXSXMMMMMMMAMMXSXMMXAMMSSMMSAMXMASMMAXXAMXMMSMXSAXAAAAMASAMMSAAXXMAAXSMMSASAMSSXSASASXMMSAMXASMAMXMAMMMXMAAASAMXSMXXXMAMMSMXXAMAMX
SXMAAMAASASXSAXSAAAXMMXSAMASAMXMAAAAAMAMXMAMAXAMAMXSAXAAMSAMSSSSSMSASAMMMSMXMAMXAXXAMXMAAAMASXMAAASAMMMMSMSSSMSMSSMMMMMSAMXAMXMMAXAAAMXSMMSS
AXMSMMMMSASASMMMSASMXSAMASAMMSXMMSSMMSXMXMMSSMMMXSAXSXMSMMXMAAMMAMXMMAMAXAMMSMSAMXMAMXMMSMMAMXSMMMSAMXMAMXAAAAXAAXASAMXAMAMAMSXMMMMSSXAMXXXA
MXAMASAAMMMMMMXXAMMAAMMMMMXSXMASAAMAMSXSAAAAAAXXAMXSMXXMXMMMMMMSSMSMSMSMSMSAASAXXAAAMAXAMASXSASXMASMMXMSSMMMMMMMMXXXAAMMSSSXMXSAASAAMMMSAMAM
XMAXAMMXMAAAAXMMMSMMMMAAXMASAAMMMXXSMSASMSMSSMMMSSSXMAMMAMMMSAMMXAXAAAAAMAMMSMMSXSMSSSMMSAMMSASMSAMXXAXMAMASXMSAXXSMSMXXAAXMAAXXAMMMMMXAAMAX
MSAMSMMSSSSSXSAAASASAXSXSMAXMMMXXXAXAMAMAXXMAAXAAXMASXMSSMSASMSMMMMSMXMSMAXXAAXMXXAAMAAAMMSAMAMXMASXSMMSAMASAASMSMSAAMXMMMMSMSSSSMSAASMSSSXS
XMAMMAXXMAMAXXMMXSAMAMMASMSSXXMASMAMAMSMMMASMMMMXMSAMXMAXMMASXAMASAMXXSXXMMMXSMMAMMMMSMMSASXMMMMSSMMMMAXXMXSMMMAAAMSMSAMAMAAXXAAMAMSMMAMXMAM
XXAMSAMMMSMMMMSMMMAMXMMAMAXMASMASMMMMMXAXXMMMMAXMAMASXMSSXMMMMMSAMMMSMSAXSASXXMMAXMAMMXMSAXXSAAMXMSASXSSSSMSAAMXMSMXXSMSAMSASMAMMAMMSMSMSMSM
SSMMXMAXAMAAASAAAXAMXSMMMXMMASMMMAXMMAXXMMSAMSAXSASAMXAAXXSAMXXMMXAXAAMAMMASAAXSAMSASMMMMSMXSSSSMMXSXAMAAMASMMSSMXASASASXMAXSAMMSAXMAXAAAAAM
XAMAMMSMSSSMXAXSMSMSXSAXMMMSASAMSAMXMASMAXSAMMAMSAMXSXSMSASASMMASMMSMSMXMMAMMSMMAMMASAAAAMMAMXMXAMMXMMMMMMMSMXMASMXMAMMMSMSXMAMAXXMSMSMSMMMX
SAMXSMAMXAAXSMMMAAXXASXMAAAMMMAMXMMMMAMMSMMXMXMXMSMMXAAXXMSAMXMAMAASXXMASMXMAAXXSMMSMMSMSMMASXMXAMXMASAXXMAMMXSAMMSMXMXAAXMASMMSSXMAXAAAXMSS
SAMXMMAXMSMMAXASMMSMXMMSSMSSXSSMMSAMMASAAXXAMASAAAMMMMMXXXMXXAMASMMMMMMASXSMSMXAMAXAAXXMXXSASAASMMMSAMMSMMMSAAMAMXASASMXSAMMMAAMAMSAMMSMSAAX
SMXASXSSMXXAXMXXAAXMAMXMAMAMXAXAASASXMSMMASMSASMSMMXSAMXMASMSMSXXMAXMSMASXXXMASMSXMMXMMMMAMAXMMMMAXMAMXAAMXMMXMAMXMSXXAXMXMMSMMMSAMXXXMASMSM
SMMXSAMXAMXSSMXSMMMSAMMSMMASMMMMMSMMXMSASMAAMAMMXAXAMAAMSAMAAAXAMMMMAAMMMMXAMXMXAMXSAXAAAXMASMSMSSMSAMSMSXXXSMSSSSXMMSMMMSMXAMXXMMXSAAMAMXAA
XXAMMXMMXMAMAXMAXSASXSAMAMSSMAAAASMASMSAMXXMAMMXSMMMSMXXMAXSMSMSMASXSMSAAXMXMAXXXSMSASMMMSAXXAAAMMAMMXAAMMMMMAXAAMXMAAAMAAMXAMXXXXASMSMAAXXS
AXSXXAXAAMASAMMSXMASXMAMSMAMXSSXXSMASXMXMASXSSMXXAAAAXMXXXMMSMAXMASAAXSMXSASXMXSMMAMAMXAASXMMSMMSMSMMSMXMAXAAXMMMMAMSSSMMSSSSMMMSMMSAMMSSSMM
SAMXSMSSXSXSXMXAMMAMMMXXXAMXAMAMSMMMSASXMXSAMXMASMMSSSMSAMXMAMSMSXMXMMXXASMXAMMXAMSMAMXMMSAXAAASAAMAMXSAAMSXMSSXAMXMMAAMXAAMMAAXMASMMMAAAAXM
MAXAAAAXMMMMAXXMSMASMMMAMAXMAMAMAAMXXAMAXXMMMSMAXAAXAAAXMMAMMSXMASAMXAXMASXXSMASXMMMASMMMMMMXXSMMXXAMASXSXXXASAMXMMAMXMXMMSMSSMMSXMAAMMSSMMS
SSMMMSMSMAAXAMXMAXASAAXXSXMXMSSSSSMMSSMMMMSMSAMMSMAMMMMMXXAMXMXXMASXXXSAMXMSMMMXMAXMAXMASXSAMSAMXSSXMAMSAMXAMMAMAMSXMMSXXXMMXAXASXSXMSAMAAXA
MXAAAAXSMSSSMSXMAMSSMSAAMMMMXAAAAXAXAMASMXAXSAMXAXXXXASMMMXSAAXMXXMMMMAXXSXAXXMASMMMSSSMSMMAXSAMXXASAMXMMXAMASXMAXASMASXMMMXSMMMSASAXMMSSMSM
MSXMSMXMXXMAMMASXSXMAMMXMAAASMSMMMSMMSAXASXMXMMSXSMMSMSAXAASMMMMSMMAAXMMMMMMSAMXXMASAAAAXAMXMMAMXSAMXMMAMMSSMXASMSAAMASASMMASAMAMAMMXMAMMAXX
MAAMAMSMSSSMMSAMMMAMXMXAMSSXSXAAXXXAMMMSXXMASMMSAXXAAXSAMSMXAXSAXASMXSAAXMAXMXSXMASMMSMMMSMMMXMMMXAMXMAAMAAMXMMMMMXMAMSAMAMMSAMMMMAXAMAXMSMM
MMSMASXAAMAXMMMSASMMXMSXXAXXMXMXMMXMMAAXXAMXMAASASXSXXMAMXASMMMXXXAAXSMMSSMSAMMMMSXSAXMMAXAXXASASMAXSMSSSMMSSSMXAXASXMMAMXSXSAMXMSMSMSAXSAAA
XAAXXMMMMSSMXAXXMAAASMMSMMSSMSSMASASXMXSXXMXSMMMAMXAMSSMMXMAMAMAMMMXMSAMXAASXSAAMXAMXSAMASAMSMSASXMMXAAMAAXAAAXSXSASXMMAMMAASXMAXAAAXAASXMXS
MSSSSXMXAAAMSMSMMSMMMAAAXAXAAAXAXSASAMXSXSAMXAXMXMXMMXASXXSMSAMAXXAXSXMSSMMMASXSSMSMMSMAMMXMMAMAMMSMMMMSSMMMMMMXMSAMAMSMSAMXMASMSMSMSMSMXXSM
AXAAXMASMXAMAAAXMAAXSMMMMASMMMSMAMAMASXMASXXXXXMASXXSSMMMAMAXXXMXMMSXAXMASMMAMMMMAMMMMXMMMMSMAMAMAAMAAMMAMMSAXXAMMAMSMAAMXXAMXMXMAXAMXAAAMAM
SMMMMAAXMASMMSMSSSSXSMAMMMMAMXMMAMAMMSAMAMMMMSMSMSXMAMAAMAMMMSMXAAMXXAMSMMXMAXAAMAMMAMAAAAMXSMXMMSSSMSMXAMASASXSSSMMASXSSSSSSSMASMMAMSMSMMMS
XAAXSMMSSXMAAXAAAXMAMMSAAASAMMAXXMASAXXMASAAXXMAAXXSSMSMSMSAXMAMSMSAXMMASMASXSSSSMXSASXSSMSAMXMSXMAXAAXSSMMSAMAMMMSMASXMAAXXAMSASASXMXAXXXXS
XSXXAMAMXAMMMMSMMMXMAAXMSMSMSMSXSMXMMSXMXSASXMSMSMMMMAAAAAXXSMSMAAMMMXSASMXSMAMAMAXMASXAXAXMMAMAAMAMMMMMMAMSMMAMAAMMAMAMMAMMXMMXSAMXSMMMXSAS
MXMMMSMMMSMSAMMAXAMXMXSAXXMMAMXASAAAAAAMXSXMAXSXAMSAMSMMMSMMMAMAMXMMAMMAXMXXAAMAMAXMAMMMMSMMSXSMSMAXAXSXSAMXASXSMSSMMSXMXMMMAMMMXMMMSAAAMMAM
AXAAXAAAAAXSASXSMSAAXMMMMASXXXMAMSSMMXSMAMAMXMSAMXAXMXXMAMXAMMMAXAXMSSSSSMXASXMSMSAMAMAAAAAXXXXAMMSMMMAASMXSAMXXXMXAASAMXMASAMAMMXXXSSMSMMXM
MMMMMSSMXXXMMMAXAXSMMMAAMAMXMASAMXMASAMMAXSASXSXXAMMMMSAMXSMSASMSSSMAXAAAASXMSXMAMMSASXMSSSMMMMMMAXASAMXMAASXSMMMMMMMXASASASMSMSAMSMXXMAMSAM
XMXSAXMAMSMSSMMMSMAXASASXMXSAAXAMSAAMAMMAMXAMAMMMSXASAMAMMSAMASXAMAMMSMMMMMAAMMMAMXMMSXAXXXAAAAAMAMAMXSAMXMXAXMAAAMAXMXMAMASAAXXXAMMAMMSXSAS
XAAAXSAASAAAMASAMXSMXSAXASXMMMMAMAMSSSMMSMMAMXMASAAASXSAMMMSMAMMSSSMAAXAXXSMMMASAMAMXSMMMXSSSSSMSAMAMXSAMMXMAMXMMMSASAAMXMAMMMSMMMASXSAMXSSM
XMAMMMXMSMMMSAMMSXMSMMMSAMXMAMSAMASXAXMAXAMXMAMMMMMMMASASMAMMXMXAMAMSSSMSMMXXSMSASASAMAMMAMMMAAASMMSSMXXMXAASMMSAMXAMXAMXMAMSASAMXAXXMAXASMS
SSMMSXMXXXSXMXXMAMMASAAMAMAMAXMAMXSMAMMASXMSSXSASXSXXXMMAMAMSMSMMSMMAAXXAAASMMMSASAMMSAMMASAMMMMMAAMAXSMXXASXAASAMMMMXMXMXSAMASASMAMXMSMMMAM
MAAASASXMMAAXSMSAMMAXXMMAXXMSXSAMMMMMXMASAXXAASAMAMXMSMXAMAXAAXMXAXMMMMSSSMSAAXMAMXMMSAXSASASXMAMMMSAMXAMSMMMMMSAMAMAMSAMXXMMXMAMMMAAAAAXMAM
XSMMMXMAAASMMSAMAXMSMSMSMSAXAASASAAAXXMASMSMMMMMMAMASASMSXSAMXMXSSSXSAAAMXMMMMSMAMSMASAMMXSXMASXSAXMXMAXMAAXXSAMXSASAMMASASXSSMMMMXSMSSSXSSS
MXASXSSSMXAMAMXMAMSMAAAAASMMMXMASMSMSMXXSAMXAXMASXSMSAMXXAMXMASAAAAASMSXMASXMASXAAAMMXMXXAMASAMXSAMSASASXXMMXMASXMMSASXSMASAXSXXAXXXMAMXAXAM
MSAMAAAAXSMXSXXXXXAAMMMMMMSSMMMXMMMMMMMMMXMSMSSMAMAMMMMAMMMXMAMMXMMMMXMAMAXAMASXSSSSXSXSMXSAMASXMAMMXMASMMSAXSAMMSMSAMXAMMMMMMSSSSMMSMMXSMSA
MMMMMMMMMASAMXAMXSMSSXXXMMMMAASASAXAAAMAAAXAAMAMMSSMAAMXSASMMSSMXMSXMSSSMSSMMXSMMAAMAAAXXAMAMXMAMMMXSMMMAXSAMSASAAMMAMXMASAXAAAXXAMAAAXMXAXA
XAXXAXXXXAMMXSMAMXAAAMAMAAAMSMSASMSSSSSMSSSMSMXSAMXSXSAASMSAMAAXXMASMAAAAXAMAASMMMMMMMSMMSMSMSSSMAAMXAAXSMMAMXAMMMMXAMXXASXSMSXSSXMMXMMAXMXX
SMSMXMMMMMSXMASXAMMMSAXMSSSXMXMAMXMMMMAAAAAAXMXXAMAMMMMXSXSAMSSMXSASMAXMMMAXMMSAMXXAXAAAXAAMAMAASMSSSXMXMAMSMMXMMSSSMSXMASMXMAAMMMSSMMSSMMSM
AXAXAXAAAMAAAMXSMMSAXXXMAMMMXXMXMAAAAMAMMSMMMMMSMMAMXAXXMAMAMXXAAMASXMSSXSAMMXMMMMXMMSSSMMSMAMXMASAAAXSASMMMAXSAAAAAAMXSAMXMMMMMAAAAAAAAAAAA
MSMMMSXMXXAXMSAXMASMXSMMASMMXXMAMXXSSSMSXXXXAAAAXSAMSSSMMXMSAMXMMMAMAMAMXSXMMASXMMAMMXMAMXMXXMAXMMMSMMMAXMASAMSAMMSMMMAMASMMMSMSMMXSMMXMMSSS
MAXAMSMSSXSAAMASMXSAASXSASAAAXSSMSMMAAAXXXXSSMXSMSMMMXAXAMXXASXMAMASAMAXMMAMSMSAMSSSMASAMMMXMXXSAMAAAXXXMMXMXMXAMXAAAMASAAAMXAAXAXXMXSMSMAAX
SASXAXASAAMXMASMXAMMMSAMXSMMXXAAASMMSMMMMXXMAXAMMXMAXSMMMMMSXMASASMXAMMMAMAMSAMXMAMAXASXSAMXMAXMAMSSSMMXMXXMXMSSMXMMASAXMSXMMMMMSMXXAXAAAMMM
MASXMMMMMMMAMSMMXXSMAMAMMXMAXMMMMMAMASXAMXSSSMMSASXSXMMXAAXSMSAMXMASXMSASMASMAMAMXSAMXSMXASAMSMSAMAMAASAMSXMAAAXMASMASAXMMMMASAMAASMMMSMSAMS
MAMMXAXAXXSAMAAAAMXMASAMSAMXSSXAAAMMAMSASAMXAAAAXMAMXAASXSMXAMSSXMASAASAMSXMMAMXSAMXSXSASXMASAASMMAMSAMASAASMSMXSASMAMAMAAMSASASMSXAAAXSXMSX
MMSASMSMSASXSSSMMAMSXSASMXMXSAMSSSXMXXSXMXSSSMMSSMXMAMASAAMMXMMSXMSSMMMSMXXMAXSAMXXSAMXXSSSSMMXMXSSMXMSMMMXMMAMXMXSMASMSMXMMASMMXMMSMSSMMSSX`;

// -----------------------------

type Direction = "-x-y" | "-x" | "-x+y" | "-y" | "+y" | "+x-y" | "+x" | "+x+y";

const test = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

// const substr = "XMAS";
const data = rawInput.split("\n").map((row) => row.split(""));

function getCoordinatesAroundXY(x: number, y: number, dir?: Direction) {
  const cos: {
    x: number;
    y: number;
    dir: Direction;
  }[] = [];
  cos.push({
    x: x - 1,
    y: y - 1,
    dir: "-x-y",
  });
  cos.push({
    x: x - 1,
    y: y,
    dir: "-x",
  });
  cos.push({
    x: x - 1,
    y: y + 1,
    dir: "-x+y",
  });
  cos.push({
    x: x,
    y: y - 1,
    dir: "-y",
  });
  cos.push({
    x: x,
    y: y + 1,
    dir: "+y",
  });
  cos.push({
    x: x + 1,
    y: y - 1,
    dir: "+x-y",
  });
  cos.push({
    x: x + 1,
    y: y,
    dir: "+x",
  });
  cos.push({
    x: x + 1,
    y: y + 1,
    dir: "+x+y",
  });

  return cos
    .filter(
      ({ x, y }) =>
        !(x < 0 || x > data[0].length - 1 || y < 0 || y > data.length - 1)
    )
    .filter((co) => {
      if (!dir) return true;

      return co.dir === dir;
    });
}

function puzzle1() {
  const allDirs: Direction[] = [
    "-x-y",
    "-x",
    "-x+y",
    "-y",
    "+y",
    "+x-y",
    "+x",
    "+x+y",
  ];

  // check for rows
  let counter = 0;
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[0].length; x++) {
      let dirs: Direction[] = [...allDirs];
      if (data[y][x] !== "X") {
        continue;
      }

      // console.log("x found at", x, y);
      // check for directions of M
      const mDatas = getCoordinatesAroundXY(x, y)
        .filter(({ dir }) => dirs.includes(dir))
        .filter(({ x, y }) => data[y][x] === "M");

      dirs = dirs.filter((d) => mDatas.map((data) => data.dir).includes(d));
      // if (x === 6 && y === 5) console.log("dirs of m", ...dirs);

      // check for A in dirs
      const aDatas = mDatas
        .map((mData) =>
          getCoordinatesAroundXY(mData.x, mData.y, mData.dir).filter(
            ({ x, y }) => data[y][x] === "A"
          )
        )
        .flat();
      // if (x === 6 && y === 5) console.log("aDatas", aDatas);

      dirs = dirs.filter((d) => aDatas.map((data) => data.dir).includes(d));
      // if (x === 6 && y === 5) console.log("dirs of a", ...dirs);

      // check for S in dirs
      const sDatas = aDatas
        .map((aData) =>
          getCoordinatesAroundXY(aData.x, aData.y, aData.dir).filter(
            ({ x, y }) => data[y][x] === "S"
          )
        )
        .flat();

      dirs = dirs.filter((d) => sDatas.map((data) => data.dir).includes(d));
      // if (x === 6 && y === 5) console.log("dirs of s", ...dirs);

      if (dirs.length) {
        counter += dirs.length;
        // console.log("add", x, y, ...dirs.map((d) => d));
      }
      // }
    }
  }

  const output = counter;
  console.log("1:", output);
}
puzzle1();

// -----------------------------

function puzzle2() {
  let counter = 0;
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[0].length; x++) {
      if (data[y][x] !== "A") {
        continue;
      }
      if (x < 1 || x > data[0].length - 2 || y < 1 || y > data.length - 2) {
        continue;
      }

      let lineCounter = 0;
      if (data[y + 1][x + 1] === "M" && data[y - 1][x - 1] === "S") {
        lineCounter++;
      }
      if (data[y + 1][x - 1] === "M" && data[y - 1][x + 1] === "S") {
        lineCounter++;
      }
      if (data[y - 1][x + 1] === "M" && data[y + 1][x - 1] === "S") {
        lineCounter++;
      }
      if (data[y - 1][x - 1] === "M" && data[y + 1][x + 1] === "S") {
        lineCounter++;
      }

      if (lineCounter === 2) {
        counter++;
      }
    }
  }
  const output = counter;
  console.log("2:", output);
}
puzzle2();