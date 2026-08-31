export const IMG = {
  hero: 'https://images.pexels.com/photos/10347115/pexels-photo-10347115.jpeg?auto=compress&cs=tinysrgb&w=1920',
  stadium: 'https://images.pexels.com/photos/30651230/pexels-photo-30651230.jpeg?auto=compress&cs=tinysrgb&w=1920',
  stadiumCrowd: 'https://images.pexels.com/photos/14460275/pexels-photo-14460275.jpeg?auto=compress&cs=tinysrgb&w=1920',
  stadiumAerial: 'https://images.pexels.com/photos/35898730/pexels-photo-35898730.jpeg?auto=compress&cs=tinysrgb&w=1920',
  raid: 'https://images.pexels.com/photos/5217424/pexels-photo-5217424.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tackle: 'https://images.pexels.com/photos/38220508/pexels-photo-38220508.jpeg?auto=compress&cs=tinysrgb&w=1600',
  news1: 'https://images.pexels.com/photos/10019595/pexels-photo-10019595.jpeg?auto=compress&cs=tinysrgb&w=1200',
  news2: 'https://images.pexels.com/photos/10228030/pexels-photo-10228030.jpeg?auto=compress&cs=tinysrgb&w=1200',
  news3: 'https://images.pexels.com/photos/5217416/pexels-photo-5217416.jpeg?auto=compress&cs=tinysrgb&w=1200',
  highlight1: 'https://images.pexels.com/photos/3641367/pexels-photo-3641367.jpeg?auto=compress&cs=tinysrgb&w=1200',
  highlight2: 'https://images.pexels.com/photos/3781296/pexels-photo-3781296.jpeg?auto=compress&cs=tinysrgb&w=1200',
  highlight3: 'https://images.pexels.com/photos/35102696/pexels-photo-35102696.jpeg?auto=compress&cs=tinysrgb&w=1200',
  highlight4: 'https://images.pexels.com/photos/38024531/pexels-photo-38024531.jpeg?auto=compress&cs=tinysrgb&w=1200',
  highlight5: 'https://images.pexels.com/photos/35102702/pexels-photo-35102702.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const PLAYERS = [
  { id: 'p1', name: 'ARJUN KUMAR', team: 'Tamil Titans', position: 'Raider', raid: 234, tackle: 28, total: 262, img: 'https://images.pexels.com/photos/14762164/pexels-photo-14762164.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'p2', name: 'VIKRAM SINGH', team: 'Bengaluru Bulls', position: 'All Rounder', raid: 168, tackle: 108, total: 276, img: 'https://images.pexels.com/photos/10612217/pexels-photo-10612217.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'p3', name: 'RAHUL SHARMA', team: 'Mumbai Raiders', position: 'Defender', raid: 22, tackle: 118, total: 140, img: 'https://images.pexels.com/photos/14898692/pexels-photo-14898692.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'p4', name: 'DEV RAJ', team: 'Jaipur Panthers', position: 'Raider', raid: 198, tackle: 16, total: 214, img: 'https://images.pexels.com/photos/15491571/pexels-photo-15491571.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'p5', name: 'KARAN MEHTA', team: 'Delhi Defenders', position: 'All Rounder', raid: 142, tackle: 96, total: 238, img: 'https://images.pexels.com/photos/11338008/pexels-photo-11338008.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

export const TEAMS = [
  { id: 't1', name: 'Tamil Titans', city: 'Chennai', played: 18, wins: 13, losses: 5, points: 64, color: '#ff5a1f' },
  { id: 't2', name: 'Chennai Warriors', city: 'Chennai', played: 18, wins: 11, losses: 7, points: 55, color: '#38bdf8' },
  { id: 't3', name: 'Bengaluru Bulls', city: 'Bengaluru', played: 18, wins: 12, losses: 6, points: 60, color: '#e01717' },
  { id: 't4', name: 'Mumbai Raiders', city: 'Mumbai', played: 18, wins: 9, losses: 9, points: 45, color: '#f59e0b' },
  { id: 't5', name: 'Delhi Defenders', city: 'Delhi', played: 18, wins: 10, losses: 8, points: 50, color: '#0ea5e9' },
  { id: 't6', name: 'Jaipur Panthers', city: 'Jaipur', played: 18, wins: 14, losses: 4, points: 70, color: '#b82a08' },
];

export const UPCOMING = [
  { id: 'm1', home: 'Tamil Titans', away: 'Bengaluru Bulls', date: 'SEP 02', time: '19:30', venue: 'Jawahar Stadium, Chennai', img: IMG.raid },
  { id: 'm2', home: 'Mumbai Raiders', away: 'Delhi Defenders', date: 'SEP 04', time: '20:00', venue: 'NSCI Dome, Mumbai', img: IMG.tackle },
  { id: 'm3', home: 'Jaipur Panthers', away: 'Chennai Warriors', date: 'SEP 06', time: '19:00', venue: 'Arena Ground, Jaipur', img: IMG.highlight1 },
  { id: 'm4', home: 'Bengaluru Bulls', away: 'Mumbai Raiders', date: 'SEP 08', time: '18:30', venue: 'Palace Arena, Bengaluru', img: IMG.highlight2 },
  { id: 'm5', home: 'Delhi Defenders', away: 'Tamil Titans', date: 'SEP 10', time: '20:15', venue: 'Indoor Hall, Delhi', img: IMG.highlight4 },
];

export const HIGHLIGHTS = [
  { id: 'h1', title: 'Arjun Kumar — 24-Point Raid Haul', category: 'Best Raids', duration: '03:42', img: IMG.highlight1 },
  { id: 'h2', title: 'Super Tackle Seals The Match', category: 'Super Tackles', duration: '01:58', img: IMG.highlight2 },
  { id: 'h3', title: 'Vikram Singh Hits Super 10', category: 'Super 10s', duration: '04:10', img: IMG.highlight3 },
  { id: 'h4', title: 'Rahul Sharma — High 5 Defense', category: 'High 5s', duration: '02:31', img: IMG.highlight4 },
  { id: 'h5', title: 'Last-Second Match Winner', category: 'Match Winners', duration: '00:48', img: IMG.highlight5 },
];

export const NEWS = [
  { id: 'n1', category: 'FINAL', date: 'AUG 30, 2026', title: 'Championship Final Set To Begin', excerpt: 'The two strongest franchises of the season clash for the trophy in a sold-out arena showdown.', img: IMG.news1 },
  { id: 'n2', category: 'RECORD', date: 'AUG 27, 2026', title: 'Top Raider Breaks Season Record', excerpt: 'A historic 24-point performance rewrites the single-season raiding record books.', img: IMG.news2 },
  { id: 'n3', category: 'LEAGUE', date: 'AUG 22, 2026', title: 'New Team Joins Kabaddi Arena', excerpt: 'The franchise expansion brings a seventh powerhouse city into the league for next season.', img: IMG.news3 },
];

export const STATS = [
  { label: 'TOTAL MATCHES', value: 128 },
  { label: 'TOTAL RAID POINTS', value: 8942 },
  { label: 'SUPER TACKLES', value: 1284 },
  { label: 'SUPER 10s', value: 96 },
];
