import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "CPL 2026: Schedule, Teams, Squads & Everything Else To Know About This Caribbean Premier League Season",
  description: "CPL 2026 runs 7 August–20 September with seven teams for the first time. Full schedule, Jamaica Kingsmen's debut, squads after the draft, how to watch and final details.",
  alternates: {
    canonical: "https://reddybookies.com/cpl-2026-caribbean-premier-league/",
  },
};

const ESSENTIALS_DATA = [
  { detail: "Dates", info: "7 August – 20 September 2026" },
  { detail: "Teams", info: "7 (one new addition)" },
  { detail: "Total Matches", info: "39" },
  { detail: "Opening Match", info: "Jamaica Kingsmen vs Antigua & Barbuda Falcons, Arnos Vale, St Vincent" },
  { detail: "Final", info: "20 September 2026, Kensington Oval, Barbados" },
  { detail: "Defending Champions", info: "Trinbago Knight Riders (5th title in 2025)" },
  { detail: "Format", info: "Twenty-over, round-robin group stage followed by four-team playoff" },
  { detail: "New for 2026", info: "Jamaica Kingsmen debut; St Vincent hosts for the first time; Barbados hosts the final" },
];

const TEAMS_DATA = [
  {
    team: "Trinbago Knight Riders",
    ground: "Brian Lara Cricket Academy, Trinidad",
    stars: "Sunil Narine, Nicholas Pooran, Kieron Pollard, Akeal Hosein",
  },
  {
    team: "Guyana Amazon Warriors",
    ground: "Providence Stadium, Guyana",
    stars: "Shimron Hetmyer, Shai Hope, Romario Shepherd, Shamar Joseph",
  },
  {
    team: "Jamaica Kingsmen",
    ground: "Sabina Park, Jamaica",
    stars: "Rovman Powell (c), Andre Russell, Keacy Carty, Keemo Paul",
  },
  {
    team: "Barbados Tridents",
    ground: "Kensington Oval, Barbados",
    stars: "Brandon King, Gudakesh Motie, Sherfane Rutherford",
  },
  {
    team: "Saint Lucia Kings",
    ground: "Daren Sammy Cricket Ground, St Lucia",
    stars: "Roston Chase, Matthew Forde, Jewel Andrew",
  },
  {
    team: "St Kitts & Nevis Patriots",
    ground: "Warner Park, St Kitts",
    stars: "Jason Holder, Johnson Charles, Kyle Mayers, Andre Fletcher",
  },
  {
    team: "Antigua & Barbuda Falcons",
    ground: "Sir Vivian Richards Stadium, Antigua",
    stars: "Alzarri Joseph, Evin Lewis, Jayden Seales, Fabian Allen",
  },
];

const SCHEDULE_DATA = [
  { date: "Friday 7 August", match: "Jamaica Kingsmen vs Antigua & Barbuda Falcons", venue: "Arnos Vale, St Vincent" },
  { date: "Saturday 8 August", match: "St Kitts & Nevis Patriots vs Trinbago Knight Riders", venue: "Arnos Vale, St Vincent" },
  { date: "Sunday 9 August", match: "Antigua & Barbuda Falcons vs Saint Lucia Kings", venue: "Arnos Vale, St Vincent" },
  { date: "Tuesday 11 August", match: "Jamaica Kingsmen vs Barbados Tridents", venue: "Sabina Park, Jamaica" },
  { date: "Wednesday 12 August", match: "Saint Lucia Kings vs St Kitts & Nevis Patriots", venue: "Daren Sammy CG, St Lucia" },
  { date: "Thursday 13 August", match: "Jamaica Kingsmen vs Guyana Amazon Warriors", venue: "Sabina Park, Jamaica" },
  { date: "Friday 14 August", match: "Saint Lucia Kings vs Antigua & Barbuda Falcons", venue: "Daren Sammy CG, St Lucia" },
  { date: "Saturday 15 August", match: "Jamaica Kingsmen vs Trinbago Knight Riders", venue: "Sabina Park, Jamaica" },
  { date: "Sunday 16 August", match: "Saint Lucia Kings vs Barbados Tridents", venue: "Daren Sammy CG, St Lucia" },
  { date: "Tuesday 18 August", match: "Jamaica Kingsmen vs St Kitts & Nevis Patriots", venue: "Sabina Park, Jamaica" },
  { date: "Wednesday 19 August", match: "Saint Lucia Kings vs Guyana Amazon Warriors", venue: "Daren Sammy CG, St Lucia" },
  { date: "Thursday 20 August", match: "Antigua & Barbuda Falcons vs St Kitts & Nevis Patriots", venue: "Sir Vivian Richards Stadium" },
  { date: "Friday 21 August", match: "Saint Lucia Kings vs Jamaica Kingsmen", venue: "Daren Sammy CG, St Lucia" },
  { date: "Saturday 22 August", match: "Antigua & Barbuda Falcons vs Trinbago Knight Riders", venue: "Sir Vivian Richards Stadium" },
  { date: "Sunday 23 August", match: "Antigua & Barbuda Falcons vs Guyana Amazon Warriors", venue: "Sir Vivian Richards Stadium" },
  { date: "Tuesday 25 August", match: "Antigua & Barbuda Falcons vs Barbados Tridents", venue: "Sir Vivian Richards Stadium" },
  { date: "Wednesday 26 August", match: "Trinbago Knight Riders vs Saint Lucia Kings", venue: "Brian Lara Academy, Trinidad" },
  { date: "Thursday 27 August", match: "St Kitts & Nevis Patriots vs Jamaica Kingsmen", venue: "Warner Park, St Kitts" },
  { date: "Friday 28 August", match: "Trinbago Knight Riders vs Barbados Tridents", venue: "Brian Lara Academy, Trinidad" },
  { date: "Saturday 29 August", match: "Trinbago Knight Riders vs Guyana Amazon Warriors", venue: "Brian Lara Academy, Trinidad" },
  { date: "Sunday 30 August", match: "St Kitts & Nevis Patriots vs Antigua & Barbuda Falcons", venue: "Warner Park, St Kitts" },
  { date: "Monday 31 August", match: "Trinbago Knight Riders vs Jamaica Kingsmen", venue: "Brian Lara Academy, Trinidad" },
  { date: "Tuesday 1 September", match: "St Kitts & Nevis Patriots vs Barbados Tridents", venue: "Warner Park, St Kitts" },
  { date: "Wednesday 2 September", match: "Trinbago Knight Riders vs Antigua & Barbuda Falcons", venue: "Brian Lara Academy, Trinidad" },
  { date: "Thursday 3 September", match: "St Kitts & Nevis Patriots vs Saint Lucia Kings", venue: "Warner Park, St Kitts" },
  { date: "Friday 4 September", match: "Guyana Amazon Warriors vs Jamaica Kingsmen", venue: "Providence Stadium, Guyana" },
  { date: "Saturday 5 September", match: "Barbados Tridents vs Trinbago Knight Riders", venue: "Kensington Oval, Barbados" },
  { date: "Sunday 6 September", match: "Guyana Amazon Warriors vs St Kitts & Nevis Patriots", venue: "Providence Stadium, Guyana" },
  { date: "Sunday 6 September", match: "Barbados Tridents vs Saint Lucia Kings", venue: "Kensington Oval, Barbados" },
  { date: "Tuesday 8 September", match: "Guyana Amazon Warriors vs Antigua & Barbuda Falcons", venue: "Providence Stadium, Guyana" },
  { date: "Wednesday 9 September", match: "Guyana Amazon Warriors vs Saint Lucia Kings", venue: "Providence Stadium, Guyana" },
  { date: "Thursday 10 September", match: "Barbados Tridents vs St Kitts & Nevis Patriots", venue: "Kensington Oval, Barbados" },
  { date: "Friday 11 September", match: "Guyana Amazon Warriors vs Trinbago Knight Riders", venue: "Providence Stadium, Guyana" },
  { date: "Saturday 12 September", match: "Barbados Tridents vs Jamaica Kingsmen", venue: "Kensington Oval, Barbados" },
  { date: "Sunday 13 September", match: "Barbados Tridents vs Guyana Amazon Warriors", venue: "Kensington Oval, Barbados" },
  { date: "Wednesday 16 September", match: "Eliminator (3rd v 4th)", venue: "Kensington Oval, Barbados" },
  { date: "Thursday 17 September", match: "Qualifier 1 (1st v 2nd)", venue: "Kensington Oval, Barbados" },
  { date: "Friday 18 September", match: "Qualifier 2 (Eliminator winner v Qualifier 1 loser)", venue: "Kensington Oval, Barbados" },
  { date: "Sunday 20 September", match: "Final", venue: "Kensington Oval, Barbados" }
];

const POINTS_TABLE_DATA = [
  { pos: 1, team: "Antigua & Barbuda Falcons", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 2, team: "Barbados Tridents", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 3, team: "Guyana Amazon Warriors", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 4, team: "Jamaica Kingsmen", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 5, team: "Saint Lucia Kings", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 6, team: "St Kitts & Nevis Patriots", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  { pos: 7, team: "Trinbago Knight Riders", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" }
];

const PAST_WINNERS_DATA = [
  { year: 2013, winner: "Jamaica Tallawahs" },
  { year: 2014, winner: "Barbados Tridents" },
  { year: 2015, winner: "Trinidad & Tobago Red Steel" },
  { year: 2016, winner: "Jamaica Tallawahs" },
  { year: 2017, winner: "Trinbago Knight Riders" },
  { year: 2018, winner: "Trinbago Knight Riders" },
  { year: 2019, winner: "Barbados Tridents" },
  { year: 2020, winner: "Trinbago Knight Riders" },
  { year: 2021, winner: "St Kitts & Nevis Patriots" },
  { year: 2022, winner: "Jamaica Tallawahs" },
  { year: 2023, winner: "Guyana Amazon Warriors" },
  { year: 2024, winner: "Saint Lucia Kings" },
  { year: 2025, winner: "Trinbago Knight Riders" }
];

const FAQS_DATA = [
  {
    question: "When does CPL 2026 start?",
    answer: "On Friday 7 August 2026, with the debut match featuring the first ever Jamaica Kingsmen. The match takes place at Arnos Vale in St Vincent."
  },
  {
    question: "How many teams are there in the CPL?",
    answer: "There are seven teams, with the addition of the Jamaica Kingsmen."
  },
  {
    question: "Who are the Jamaica Kingsmen?",
    answer: "They are the new team based in Jamaica, set to compete in the CPL for the first time since the Jamaica Tallawahs folded at the end of the 2024 season. The side is captained by Rovman Powell, features Andre Russell, and looks to add its name to the long list of successful Jamaican franchises."
  },
  {
    question: "Where will the final be held?",
    answer: "At Kensington Oval in Barbados on Sunday 20 September, which will be the first final to be held in Barbados."
  },
  {
    question: "Who won the most recent CPL?",
    answer: "The most recent CPL was won by the Trinbago Knight Riders, who beat Guyana Amazon Warriors in the final to claim their fifth title. This year they chase a record sixth."
  },
  {
    question: "Did the Barbados Royals rebrand?",
    answer: "Yes – the franchise was renamed the Barbados Tridents in 2026."
  },
  {
    question: "Is there a limit to the number of overseas players that may be selected for a CPL match?",
    answer: "Four overseas players may be selected for a side's XI, with a squad of 17 players containing a maximum of five overseas signings. Each XI must also include one breakout player."
  }
];

export default function CplPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#AEEA00] font-black text-2xl md:text-3xl tracking-wide leading-tight">
              CPL 2026: Schedule, Teams, Squads & Everything Else To Know About This Caribbean Premier League Season
            </h1>
            
            {/* Table of contents jump-to links */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-400 border-t border-[#00C853]/5 pt-4">
              <span className="text-gray-500 font-extrabold uppercase tracking-wide mr-1 mt-1">Jump to:</span>
              {[
                { label: "The Essentials", href: "#essentials" },
                { label: "Jamaica Kingsmen", href: "#jamaica-kingsmen" },
                { label: "Teams", href: "#teams" },
                { label: "Squad Rules", href: "#squad-rules" },
                { label: "Full Schedule", href: "#schedule" },
                { label: "Points Table", href: "#points-table" },
                { label: "How to Watch", href: "#how-to-watch" },
                { label: "Past Winners", href: "#past-winners" },
                { label: "FAQs", href: "#faqs" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="bg-[#05080f] border border-[#00C853]/5 hover:border-[#00C853]/30 px-3 py-1.5 rounded-full text-gray-300 hover:text-white transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          {/* Intro Section */}
          <section className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md shadow-black">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Seven teams. Finally, the Caribbean Premier League expands after 13 years with six as a constant. It adds a territory that previously only featured in the CPL as an absent franchise, for good reason: Jamaica. CPL 2026 runs from 7 August to 20 September, starting at Arnos Vale in St Vincent (a debut venue) and finishing at Kensington Oval in Barbados (a debut location for the finale). Defending champions Trinbago Knight Riders seek a record sixth title.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              There is plenty to process before the first ball is bowled, so let's start with the basics.
            </p>
            <div className="pt-2">
              <ConicButton text="Bet on CPL 2026 Live" />
            </div>
          </section>

          {/* Essentials Section */}
          <section id="essentials" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              CPL 2026: The Essentials
            </h2>
            <div className="overflow-x-auto bg-[#05080f] border border-[#00C853]/5 rounded-2xl p-5 mt-2">
              <table className="w-full text-left font-bold border-separate border-spacing-y-2 text-xs md:text-sm">
                <thead>
                  <tr className="text-gray-400">
                    <th className="pb-2 pl-3">Detail</th>
                    <th className="pb-2">Information</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  {ESSENTIALS_DATA.map((row, idx) => (
                    <tr key={idx} className="bg-[#0c1322]/80 hover:bg-[#0c1322] transition-colors">
                      <td className="p-3 rounded-l-xl text-gray-300 font-extrabold w-1/3">{row.detail}</td>
                      <td className="p-3 rounded-r-xl text-white font-semibold">{row.info}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Story of Jamaica Kingsmen */}
          <section id="jamaica-kingsmen" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              The Story of the Jamaica Kingsmen
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              With the dissolution of the Jamaica Tallawahs at the end of the 2024 season, it seemed unthinkable that the island of two of the CPL's first four title winners would not have a team in the competition. That situation was rectified in March 2026, when Jamaica Kingsmen were born. Based out of Sabina Park, the new franchise got off to a flying start by securing the first three picks in the 2026 draft, all of which were Jamaican players.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              They made good on their opportunity, with Rovman Powell captaining his country's side, Andre Russell returning to his home island, and the likes of Odean Smith, Jeavor Royal, Kirk McKenzie and teenage pace sensation Vitel Lawes adding strength to the local contingent. For a debut franchise, they certainly knew how to stock their ranks.
            </p>
          </section>

          {/* Teams Section */}
          <section id="teams" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              CPL 2026 Teams: The Seven Franchises
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-2">
              One other addition must be noted, with the Barbados-based Royals rebranding as the Barbados Tridents in May 2026 as part of the island's One Barbados initiative. Here is a look at all seven franchises, and their home grounds, star attractions and notable signings.
            </p>
            <div className="overflow-x-auto bg-[#05080f] border border-[#00C853]/5 rounded-2xl p-5">
              <table className="w-full text-left font-bold border-separate border-spacing-y-2 text-xs md:text-sm">
                <thead>
                  <tr className="text-gray-400">
                    <th className="pb-2 pl-3">Team</th>
                    <th className="pb-2">Home Ground</th>
                    <th className="pb-2">Stars</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  {TEAMS_DATA.map((row, idx) => (
                    <tr key={idx} className="bg-[#0c1322]/80 hover:bg-[#0c1322] transition-colors">
                      <td className="p-3 rounded-l-xl text-white font-extrabold w-1/4">{row.team}</td>
                      <td className="p-3 text-gray-300 font-semibold w-1/3">{row.ground}</td>
                      <td className="p-3 rounded-r-xl text-gray-400 font-semibold">{row.stars}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              The St Kitts & Nevis Patriots quietly put together an impressive squad, one that boasts the CPL's all-time leading run-scorer in Johnson Charles and the man second on that list, Andre Fletcher. Meanwhile, TKR did what TKR do and retained their core, with Sunil Narine, Nicholas Pooran, Kieron Pollard and Akeal Hosein all staying put.
            </p>
          </section>

          {/* Squad Rules */}
          <section id="squad-rules" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              How Were The Squads Formed This Year?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              It is worth briefly discussing the rules behind the formation of these squads. Each features 17 players, including a maximum of five overseas stars, three "breakout" young players and one breakout selection that must appear in each team's starting XI. Up to four overseas players may be selected for any given match, while the six teams that retained their franchises got four Right to Match options for any player who had been with them in 2025. The Kingsmen got the first three picks of the draft (restricted to Jamaican players) plus one Right to Match option, while any team that lost a player to the expansion side got an additional RMO in compensation. Overseas stars were signed directly by the franchises, rather than through the draft.
            </p>
          </section>

          {/* Schedule Breakdown */}
          <section id="schedule" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              CPL 2026 Schedule: The Full Breakdown
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-2">
              All matches are scheduled to be played in local time. The opening three fixtures are in St Vincent, before the tour moves on to Jamaica, St Lucia, Antigua, Trinidad, St Kitts, Guyana and finally Barbados, where the final league matches and the entire playoff series will be held. All local times are listed below.
            </p>
            <div className="overflow-x-auto bg-[#05080f] border border-[#00C853]/5 rounded-2xl p-5 max-h-[600px] overflow-y-auto custom-scrollbar">
              <table className="w-full text-left font-bold border-separate border-spacing-y-2 text-xs md:text-sm">
                <thead>
                  <tr className="text-gray-400 sticky top-0 bg-[#05080f] z-10">
                    <th className="pb-2 pl-3">Date</th>
                    <th className="pb-2">Match</th>
                    <th className="pb-2">Venue</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  {SCHEDULE_DATA.map((row, idx) => (
                    <tr key={idx} className="bg-[#0c1322]/80 hover:bg-[#0c1322] transition-colors">
                      <td className="p-3 rounded-l-xl text-white font-extrabold w-1/4">{row.date}</td>
                      <td className="p-3 text-[#AEEA00] font-extrabold w-2/5">{row.match}</td>
                      <td className="p-3 rounded-r-xl text-gray-300 font-semibold">{row.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              Note that most matches are scheduled to start at 7pm local time, with a few earlier kick-offs in Trinidad and Barbados, and one match – a Sunday morning game in Guyana – set to begin at 10am local time. Indian viewers in particular should note that 7pm local time in the Caribbean equates to 4:30am IST, so this is not a tournament for early risers.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The format of the play-offs is also new to the CPL, with the third-placed team now facing the fourth-placed team in an Eliminator before the first and second-placed sides meet in the Qualifier. The loser of the Qualifier faces the winner of the Eliminator in the second Semi-final, with the final on 20 September being a winner-takes-all match between the top two teams.
            </p>
          </section>

          {/* Points Table */}
          <section id="points-table" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              CPL 2026 Points Table
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-2">
              This table will be updated for the first time on 7 August, after the opening fixtures have been played. For reference, there are seven teams in the CPL, with each playing 10 group-stage matches, with the top four advancing to the play-offs.
            </p>
            <div className="overflow-x-auto bg-[#05080f] border border-[#00C853]/5 rounded-2xl p-5">
              <table className="w-full text-left font-bold border-separate border-spacing-y-2 text-xs md:text-sm">
                <thead>
                  <tr className="text-gray-400">
                    <th className="pb-2 pl-3">Pos</th>
                    <th className="pb-2">Team</th>
                    <th className="pb-2 text-center">Pld</th>
                    <th className="pb-2 text-center">W</th>
                    <th className="pb-2 text-center">L</th>
                    <th className="pb-2 text-center">NR</th>
                    <th className="pb-2 text-center">Pts</th>
                    <th className="pb-2 text-center">NRR</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  {POINTS_TABLE_DATA.map((row, idx) => (
                    <tr key={idx} className="bg-[#0c1322]/80 hover:bg-[#0c1322] transition-colors">
                      <td className="p-3 rounded-l-xl text-white font-extrabold text-center w-12">{row.pos}</td>
                      <td className="p-3 text-white font-extrabold">{row.team}</td>
                      <td className="p-3 text-center text-gray-300">{row.pld}</td>
                      <td className="p-3 text-center text-gray-300">{row.w}</td>
                      <td className="p-3 text-center text-gray-300">{row.l}</td>
                      <td className="p-3 text-center text-gray-300">{row.nr}</td>
                      <td className="p-3 text-center font-extrabold text-[#AEEA00]">{row.pts}</td>
                      <td className="p-3 rounded-r-xl text-center text-gray-400">{row.nrr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Watch */}
          <section id="how-to-watch" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              How To Watch The CPL 2026
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Official broadcasters for the 2026 season will be revealed on cplt20.com at a later date, but for now, the situation is similar to recent years, with ESPN Caribbean and Flow Sports showing matches across the region, Star Sports and FanCode showing in India, TNT Sports in the UK, and Willow TV in the US and Canada. For viewers outside the broadcast zones, the CPL has previously showed all matches for free on their YouTube channel, and it is advisable to check the CPL's social media channels and website ahead of the 2026 season for any changes.
            </p>
          </section>

          {/* Past Winners */}
          <section id="past-winners" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h2 className="text-[#AEEA00] font-black text-xl md:text-2xl tracking-wide border-b border-[#00C853]/10 pb-2">
              CPL Past Winners
            </h2>
            <div className="overflow-x-auto bg-[#05080f] border border-[#00C853]/5 rounded-2xl p-5 max-w-md">
              <table className="w-full text-left font-bold border-separate border-spacing-y-2 text-xs md:text-sm">
                <thead>
                  <tr className="text-gray-400">
                    <th className="pb-2 pl-3">Year</th>
                    <th className="pb-2">Winner</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  {PAST_WINNERS_DATA.map((row, idx) => (
                    <tr key={idx} className="bg-[#0c1322]/80 hover:bg-[#0c1322] transition-colors">
                      <td className="p-3 rounded-l-xl text-[#AEEA00] font-extrabold w-24">{row.year}</td>
                      <td className="p-3 rounded-r-xl text-white font-semibold">{row.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">
              Five titles for Trinbago Knight Riders, including their 2015 victory as the Trinidad & Tobago Red Steel. Last season's final in Guyana was yet another thrilling encounter, with Akeal Hosein guiding the Knight Riders to a narrow victory over the Amazon Warriors, who have now lost more finals than any other side in CPL history. Note the three titles for the disbanded Jamaica Tallawahs too — a history the new Kingsmen will be desperate to live up to.
            </p>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="w-full bg-[#0c1322] border border-[#00C853]/10 rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="text-white font-extrabold text-xl md:text-2xl mb-6 tracking-wide border-b border-[#00C853]/10 pb-3 flex items-center gap-2">
              <span className="text-[#AEEA00]">❓</span> CPL 2026: FAQs
            </h3>
            <Accordion items={FAQS_DATA} />
          </section>

          {/* Bottom Last Updated Metadata */}
          <footer className="w-full border-t border-[#00C853]/5 pt-4 text-xs text-gray-500 font-bold flex flex-col md:flex-row justify-between gap-2">
            <span>Last updated: 8 July 2026.</span>
            <span>Fixtures per the official CPL announcement; points table updates live from 7 August.</span>
          </footer>

        </div>
      </div>
    </div>
  );
}
