
'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Card } from '@mui/material';
import './styles.css';
import React, { useState } from 'react';
import { IconQuestionMark } from '@tabler/icons-react';
// import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';


import {

	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from "@mui/material";
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useRouter } from 'next/navigation';
import Rating from '@/app/rating';


const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: theme.palette.common.black,
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.black,
	}
}));





export default function Content() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const router = useRouter();

	type floating = {
		openModal: string;
	};

	const [floatingOpen, setFloatingOpen] =
		useState<floating>({
			openModal: ''
		});

	function openForm() {
		setFloatingOpen({ openModal: 'block' })
	}
	function closeForm() {
		setFloatingOpen({ openModal: 'none' })
	}




	return (
		<form method="post" >
			<Card sx={{ p: 1, width: 'max(100%,500px)', mx: 'auto' }}>
				{/* <Box height="100%"> */}
				{/* <button>back</button> */}
				<PageContainer title="Content" description="this is Content">
					<div className="row-social">
						<div className="column1" style={{ padding: "7px" }}>
							<BootstrapTooltip title="Back">
								<svg cursor="pointer" onClick={() => router.push('/')} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#0085db" fill="none" strokeLinecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /> </svg>
							</BootstrapTooltip>
						</div>
						<div className="column2" style={{ justifyContent: "center", display: "flex", marginRight: "126px" }}>
							<b style={{ justifyContent: "center", fontSize: "23px", alignItems: "center", padding: "7px", display: "flex" }}>
								Social Welfare</b>
						</div>
					</div>

					<div className='borderLink'>
						<div className='main'>
							<div className='scrollcontent' >
								<section id="introduction">
									<h2 style={{ fontSize: "16px", margin: 0 }}>Introduction</h2>
									<p>
										Astronomy involves the observation of distant objects beyond Earth: from
										low-orbit spy satellites to our own Solar System to our Milky Way galaxy
										to other distant galaxies and out to the observable edge of the universe. A
										non-exhaustive list of some of the types of objects that are observed includes:
									</p>

									<ol>
										<li>1. Planets and moons in our own Solar System</li>
										<li>2. Stars (including our Sun)</li>
										<li>3. Planets orbiting other stars</li>
										<li>4. Remnants of dead stars: white dwarfs, neutron stars, and black holes</li>
										<li>5. Giant, cool clouds of gas and dust</li>
										<li>6. Other galaxies beyond our Milky Way</li>
										<li>7. Diffuse, hot gas: between stars, and between galaxies</li>
										<li>8. The overall structure of the universe.</li>
									</ol>
									<p>
										These observations are made using a variety of different techniques. Most
										frequent is the detection of electromagnetic radiation: everything from highenergy gamma- and X-rays, through ultraviolet, visible, and infrared light, and
										down to microwave and radio waves. When people speak of multi-messenger
										astronomy, they mean observations beyond merely electromagnetic detections. These other approaches involve the direct or indirect detection of highenergy, particles (i.e., not photons) such as the solar wind, cosmic rays, or
										neutrinos from . The newest set of observations includes the detection of gravitational waves from distant, massive, rapidly-rotating objects.
										Because astronomy is an observationally-driven field, big advances and
										new discoveries often occur whenever technological capabilities improve substantially. Ancient astronomers, from well before Hipparchus down to Tycho Brahe, could only rely on what their own, unaided eyes could see. That
										changes with the invention of the telescope: astronomers still had to use their
										own eyes, but now they could see finer details (because of optical magnification) and study fainter objects (a telescope lens is larger than your eye’s pupil,
										so it collects more light).
										The next big revolution was astrophotography: a photographic setup can
										sit collecting light from a faint source for minutes or even hours, so much
										fainter and/or more distant objects could be studied than by just peering
										through a telescope. In the last century, the development of photoelectric detectors — first as ‘single-pixel’ devices and later as mega- or giga-pixel optical
										CCDs or infrared array detectors — has had at least as big an impact, by virtue
										of their dramatically enhanced sensitivity compared to photography. More recently still, other new technologies have also emerged such as interferometry
										to give the sharpest possible images at radio to infrared wavelengths, or adaptive optics which achieves something similar in the optical and infrared.
									</p>
								</section>
								<section id="request-response">
									<h2 style={{ fontSize: "16px", margin: 0 }}>Request &amp; Response</h2>
									<div>
										New Science Text Books are prepared in such a way that they develop childrens observation
										power and research enthusiasm. The official documents of national and State Curriculum frame
										works and the Right Education Act are aspairing to bring grossroute changes in science teaching.
										These textbooks are adopted in accordance with such an aspiration. Hence, science teachers
										need to adapt to the new approach in their teaching.
										In view of this, let us observe certain Dos and Donts:
										<ol>
											<li>
												• There is an immediate need to discard the practices adopted in the schools on a false belief
												that teaching of 10th class means preparing the children for public examination. In 10th
												class the teaching learning process should focus on achieving the academic standards rather
												winning race of scoring marks.
											</li>
											<li>
												• Avoid practices like using guides and question banks, asking the children to read only
												important questions, focussing on lessons which help in scoring more marks.
											</li>
											<li>
												• Read the lesson thoroughly before you start teaching and ask the children to read the text.
												Then initiate a discussion to make the children understand the concepts in the lessons.
											</li>
											<li>
												• Encourage children to express their own views and ideas while writing the answers. Give
												weightage to such type of writing in examination.
											</li>
											<li>
												• Some instructions are given in the textbook regarding the collection of certain information
												by the teacher. Collect such information and make it available to students.
											</li>
											<li>
												• In public examination, the weightage will be given to all aspects of the syllabus. Except
												foreword of the textbook everything else must be treated as a part of the curriculum.
											</li>
											<li>
												• Textual concepts are presented in two ways: one as the classroom teaching and the other
												as the laboratory performance.
											</li>
											<li>
												• Lab activities are part and parcel of a lesson. So, teachers must make the children conduct
												all such activities during the lesson itself, but not separately.
											</li>
											<li>
												• Teachers are advised to follow the following teaching steps while transacting lessons-mind
												mapping, reading lesson and identifyng new words by children, performing activities,
												demonstration and discussion, conclusion and evaluation.
											</li>
											<li>
												• In the text, some special activities are presented as box items: think and discuss, let us do,
												conduct interview, prepare report, display in wall magazine, participate in Theatre Day, do
												field observation, organize special days. To perform all of them is compulsory.
											</li>
											<li>
												• The abbreviation (A.S.) given at the end of each question in the section “Improve your
												learning” indicates academic standard.
											</li>
											<li>
												• Collect information of relevant website addresses and pass on to students so that they can
												utilize internet services for learning science on their own.
											</li>
											<li>
												• Plan and execute activities like science club, elocution, drawing, writing poetry on science,
												making models etc.to develop positive attitude among children about environment, SCERT
												biodiversity, ecological balance etc
											</li>
										</ol>
									</div>
								</section>
								<section id="authentication">
									<h2 style={{ fontSize: "16px", margin: 0 }}>Authentication</h2>
									<p>
										1960s: Passwords and encryption
										In 1961, Corbato created a password program to use on the MIT computer system. By the late 1960s, programmers worked to develop a stronger password solution—one that wasn’t stored in plaintext files. Robert Morris, a cryptographer at Bell Labs, developed a password encryption scheme while working on Unix. It used a key derivation function that calculates a secret value and makes it easy to compute in one direction, but not in the opposite.

										1970s: Asymmetric cryptography
										Asymmetric cryptography, also known as public-key cryptography, uses a mathematically related pair of keys—one public and one private—to encrypt and decrypt information. Asymmetric cryptography was developed in the 1970s by UK government employees, James Ellis, Clifford Cocks, and Malcolm J. Williamson. However, this knowledge was not made public until 1997.

										1980s: Dynamic passwords
										Traditional passwords quickly became insufficient as technology advanced. Passwords were easily guessable, and many people reused their passwords, making them vulnerable. So computer scientists developed dynamic passwords. Dynamic passwords change based on variables like location, time, or a physical password update. Eventually, two dynamic password protocols were introduced:

										TOTP—Time-based One-Time Password(OTP), where the password is generated based on the time requested.

										HOTP—HMAC (Hash-based Message Authentication Code) OTP is an event-based OTP, where the password is generated by a hash code that uses an incremental counter.

										Dynamic passwords are often used in combination with regular passwords as one form of two-factor authentication.
									</p>
								</section>
								<section id="endpoints">
									<h2 style={{ fontSize: "16px", margin: 0 }}>Endpoints <b>(Root)</b></h2>
									<section id="endpoints--root">
										<p>
											Mathematical modelling is an essential tool for understanding the world. In olden days
											the Chinese, Egyptians, Indians, Babylonians and Greeks indulged in understanding
											and predicting the natural phenomena through their knowledge of mathematics. The
											architects, artisans and craftsmen based many of their works of art on geometric
											prinicples.
											Suppose a surveyor wants to measure the height of a tower. It is physically very
											difficult to measure the height using the measuring tape. So, the other option is to find
											out the factors that are useful to find the height. From his knowledge of trigonometry,
											he knows that if he has an angle of elevation and the distance of the foot of the tower
											to the point where he is standing, then he can calculate the height of the tower.
											So, his job is now simplified to find the angle of elevation to the top of the tower
											and the distance from the foot of the tower to the point where he is standing. Both of
											which are easily measurable. Thus, if he measures the angle of elevation as 40° and
											the distance as 450m, then the problem can be solved as given in Example 1.
										</p>
									</section>
									<section id="endpoints--cities-overview">
										<h3>Cities Overview</h3>
										<p>
											When you look at a city, it’s like reading the hopes, aspirations and pride of everyone who built it. – Hugh Newell Jacobsen
											The Cities Book is a celebration. Of the physical form, in stone, glass, metal and wood, that is taken by these remarkable spiritual,
											cultural, political and technological bastions. Of the people whose energy spills out into the city, transforming itself into music, art
											and culture. Of the myriad sights, smells, sounds and other temptations awaiting travellers at the end of a plane, train or boat
											journey. By celebrating the majesty of cities on every continent we are pausing to marvel at the contribution they have made to the
											collective richness of humankind over more than six millennia.
											Hence it made sense to us to begin this book with a look at the evolution of the city – the roots of cities in the fi rst civilisations,
											the characteristics that we associate with the great cities of today, and the possible directions that they will take in the future.
											Like so many other things, cities come to us as a gift from the ancients. Although capable of great foresight, our urban ancestors
											could not possibly have predicted the way in which cities were to change the world we live in. According to the UN, the urban
											populace is increasing by 60 million people per year, about three times the increase in the rural population. To get a sense of the
											impact that cities have made, try picturing the world without them. Imagine fashion without Milan, theatre without London’s West
											End, hip-hop without New York, classical music without Vienna, or technology without Tokyo.
											UN Secretary-General Kofi Annan summed it up best when he said: ‘We have entered the urban millennium. At their best, cities
											are engines of growth and incubators of civilization. They are crossroads of ideas, places of great intellectual ferment and
											innovation…cities can also be places of exploitation, disease, violent crime, unemployment, and extreme poverty…we must do
											more to make our cities safe and livable places for all.’

										</p>
									</section>
									<section id="endpoints--city-detail">
										<h3>City Detail</h3>
										<p>
											The story of how cities evolved is the story of civilisation. The link is encoded in the words themselves: ‘civilisation’ comes from the
											Latin civitas, meaning ‘city’. We can catch a glimpse of the past in the preserved walls of castles, palaces and places of worship that
											have survived, albeit haphazardly, for centuries, and which infl uence the colour and fl avour of our present-day cities. Cuzco in Peru is
											the perfect example. The city’s strongest walls remain those constructed by the Inca who, unfathomably, erected enormous stone
											monoliths carved by hand and laid the blocks so precisely, without mortar, that it is impossible to slide paper between them.
											Following the Spanish conquest, the ancient Inca stones were used to build palaces and cathedrals, but the stones were so mighty
											that many could not be brought down and so continue to make up the streets and foundations of newer buildings to this day.
											Paradoxically, with the advent of the fi rst sedentary settlements, where people fl ocked together to settle in large groups instead
											of roaming the countryside as small bands of hunter-gatherers, came the advent of inter-city travel. Initially people travelled (as they
											still do) for trade and business, war, or religious pilgrimages, but eventually cities gave birth to the leisured classes who could travel
											for curiosity and pleasure. Even in ancient times there were hoteliers who ran a roaring trade for prototypal backpackers and travel
											writers and historians who made their livings from the fantastical tales of their wanderings.
										</p>
									</section>
									<section id="endpoints--city-config">
										<h3>City Config</h3>
										<p>
											Current archaeological records indicate that the oldest cities are those found
											scattered along the banks of the Tigris and Euphrates Rivers in Mesopotamia,
											modern Iraq.
											Five thousand years ago merchants travelling upriver from Egypt would
											have entered the great Sumerian capital of Uruk by boat, sailing swiftly past
											the fertile shores lined with irrigation ditches that had been dug centuries
											before. These ditches, fi lled with water from the Euphrates River, had allowed
											the Sumerians to begin farming the land, producing surpluses of food that
											were used to feed an army of construction workers, possibly slaves, to raise
											the fi rst cities the world had ever seen. The most ancient of these was Uruk
											and with its construction the door was fi rmly closed on the prehistoric
											epoch.
											The city of Uruk was famous for its giant defensive walls, luscious gardens
											and the sophistication of its ruling elite, chief among them the god-king
											Gilgamesh, who became the subject for the world’s oldest epic, the Song of
											Gilgamesh, which is still in print today. Excavation of the vast site where the
											city once stood, an area covering 450 hectares, has yielded astonishing fi nds.
											In the 1900s a cuneiform tablet found at Uruk happened to contain what is
											regarded as the best and most accurate description of the legendary Tower of
											Babel, an architectural feat referred to in the Bible.
											But the real fascination is with the form of the city itself. In 2003 Jorg
											Fassbinder, part of a German-led archaeological team conducting excavations
											at the site, said that in its heyday Uruk must have been ‘like Venice in the
											desert’. The dig covered more than 100 hectares, uncovering extensive
											gardens as well as an extremely sophisticated network of canals by which the
											Sumerians swanned around their idyllic city in absolute luxury.
											It is incredible to think that after more than 5000 years the legacy of
											Sumerian culture could still remain potent. Not only did they invent the
											wheel and come up with the world’s fi rst written language (Sumerian
											cuneiform script, which emerged around 3500 BC), but they also dreamt up
											the sexagesimal number system, which we still use to measure time. Every
											time you count down the minutes to an event, you have the Sumerians to
											thank.
											What we know of ancient Sumer has been deduced through careful analysis
											and interpretation of the discoveries made by archaeologists. These include
											stone tablets inscribed with ancient stories (the fi rst ever recorded); gold
											necklaces inlaid with lapis lazuli that were once worn by Sumer’s elite;
											weathered fragments of beautiful vases depicting the conquest and
											subjugation of rival cities; and the broken outlines of once-feared cities that
											stretched for kilometres. Interpreting these fi nds with a little imagination
											only whets our appetite and makes us want to learn more about these strange
											worlds that have been lost in time.
										</p>
									</section>
									<section id="endpoints--city-spots-overview">
										<h3>City Spots Overview</h3>
										<p>
											Sicilian writer Vincenzo Salerno said that despite everything that came after
											it, the blueprint for Western civilisation was the society of ancient Rome. The
											Romans gave us our alphabet (minus u and w), and many of the words we still
											use are derived from ancient Latin. They gave us the 12-month lunar calendar;
											the rudiments of classical architecture; the pope; straight roads; a system of
											government; literature; public-ablution facilities; and endless subject matter
											for Shakespearian plays and even movies, such as Gladiator and I, Claudius.
											The Romans came, saw and conquered, and left enough behind that they
											would never be forgotten. And at the heart of the mighty empire was the
											imperial capital, a monolith of power carved in brilliant marble, home of the
											Senate and generations of megalomaniac emperors. Ancient Rome’s former
											pagan glory is still visible if you take a stroll around the modern city, notably
											the remains of the Roman Forum, the Pantheon and the Colosseum.
											Quite clearly, the Romans were a pretty remarkable bunch. But they were
											not the fi rst people to become civilised, and nor did they develop in a vacuum.
											They were great assimilators, subsuming the skills, knowledge, literary
											conventions and even deities from neighbouring or past civilisations – a
											process hastened through conquest. From afar Rome admired in particular
											the Greek and Egyptian civilisations, centred on the capitals of Athens and
											Alexandria, which were already melting pots of ideas, racial groups and
											culture.
										</p>
									</section>
									<section id="endpoints--city-spot-detail">
										<h3>City Spot Detail</h3>
										<p>
											came up with the best designs for the city’s manhole covers. The idea was to
											help make city infrastructure more visible to the public. How much more a
											part of the city would you feel if you had a chance to design illustrations that
											would appear on manhole covers everywhere?
											The city’s public discourse about livability eventually led to a plan that
											recognised the city as an organic entity in itself. A discussion paper on
											Vancouver prepared by the Vancouver-based International Centre for
											Sustainable Cities stated:
											The brain and nervous system of a livable city refers to participatory
											processes by which a city develops visions and plans, monitors the
											implementation of its plans and adjusts to changing circumstances. The
											heart is the common values and public space of a city that defi ne its
											essential identity. The neighborhoods, industrial clusters, downtown,
											parks and other hubs form the organs of a city. Similar to the circulatory
											system and neural networks that weave connections within a living
											organism, transportation routes, infrastructure, waste disposal,
											communication lines, water fl ows, and green space connect these nodes.
											The essence of livability was found to be about quality of life, which is tied to
											the ability of citizens to access food; clean air; aff ordable housing; infrastructure (transportation, communication, water and sanitation); meaningful
											employment; and green parks and spaces, and is also determined by the access
											that its residents have to participate in decision-making to meet their needs.
											The Economist survey, published in October 2005, assesses living conditions in 127 cities around the world by looking at these factors.Vancouver is
											the highest ranked city, but a further two Canadian cities (Montréal and
											Toronto) feature in the top fi ve. Alongside Canada, Australia has some of the
											most livable places in the world, with Melbourne ranked joint second overall.
											Perth, Adelaide and Sydney join Zürich, Toronto and Calgary in joint fi fth
											place. Not far behind is Brisbane in joint 11th place.
											Elsewhere in the Asian region, cities in Japan, New Zealand, Hong Kong,
											South Korea, Singapore and Taiwan all off er a good standard of living, and it
											is only a humid climate that brings scores down slightly. The infl ux of
											investment in China alongside the increased availability of goods has helped
											all six Chinese cities surveyed perform relatively well, along with other
											emerging business centres such as Bangkok and Kuala Lumpur.
											Although higher crime rates and a greater threat of terror put US cities
											below those of Canada, US cities are still among the world’s most livable.
											Cleveland and Pittsburgh are the joint best scoring cities in the US, in joint
											26th place in the global ranking. Although no Latin American city surveyed
											manages to present ideal living conditions, neither do any fall into the
											category where extreme diffi culties are faced. Montevideo (Uruguay),
											Santiago (Chile) and Buenos Aires (Argentina), which share joint 64th place,
											off er the best living conditions in Latin America.
											Africa and the Middle East fare the worst of any region. Instability, the
											threat of terror and many cultural restrictions bring the ratings down,
											although strong anticrime measures in many Arab states are a stabilising
											factor, and in Israel the negatives are off set by a generally high level of
											development that makes Tel Aviv the best destination surveyed there.
										</p>
									</section>
									<section id="endpoints--city-config">
										<h3>City Config</h3>
										<p>
											In an essay entitled ‘The Rise of the Ephemeral City’ published in Metropolis
											Magazine, Joel Kotkin has suggested that we are witnessing the emergence of
											a new urban environment populated by ‘non-families’ and the nomadic rich
											whose needs are attended to by a subservient service class. He calls it the
											ephemeral city and suggests that it prospers merely through its ability to
											provide an ‘alternative’ – and one suspects extravagantly decadent – lifestyle
											for the wealthy few who can aff ord it. Even though Kotkin wasn’t referring to
											the city of Dubai, he might well have been describing the glittering, paradisal
											playground for the rich, famous and, especially, the nouveau riche.
											Often the diff erence between the possible and the impossible is someone
											brave enough to have a vision. In the coastal city of Dubai, part of the United
											Arab Emirates, Sheikh Mohammed bin Rashid Al Maktoum is such a man.
											In 2001 he ordered construction work to begin on two palm tree–shaped
											artifi cial islands. According to the European Space Agency, whose satellite
											has been monitoring the construction, the islands comprise approximately
											100 million cubic metres of rock and sand and are set to increase Dubai’s
											shoreline by 120km.
											When complete, the Palm Islands will support over 60 luxury hotels, 5000
											residential villas, 5000 apartments, marinas, water theme parks, restaurants,
											shopping malls, sports facilities, health spas, cinemas and numerous dive
											sites. It is hoped the development, dubbed by proud locals as the Eighth
											Wonder of the World, will further secure the city’s reputation as a top tourist
											destination and fantasy playground for the fabulously wealthy. Football ace
											David Beckham is rumoured to have purchased an apartment.
											To prove that less is not more, the sheikh announced in 2004 that a third
											and even grander Palm island, the Deira Palm, was to begin construction.
											This palm tree–shaped island will become the largest artifi cial island in the
											world, with an area of 80 sq km, and will consist of a trunk, a crown with 41
											fronds and a surrounding crescent island that acts as a breaker. The residential
											area, located on the fronds, will consist of 8000 two-storey town houses.
											And just in case there was any shadow cast over Dubai’s ambition to
											remain completely over the top, the sheikh has also commissioned the
											erection of the enormous Burj Dubai, which will be the world’s tallest tower
											when completed. In keeping with the plant theme, the tower’s triple-lobed
											design is based, according to the press release, ‘on an abstracted version of a
											desert fl ower, while the silhouette of the lobes resonate the onion-dome
											constructions of an Islamic culture’.
											Another epic urban-development project, considered to be the largest
											private commercial real-estate development in the world, is underway in
											South Korea. At an initial cost of US$15 billion, New Songdo City is under
											construction on a 556-hectare landfi ll connected to mainland Seoul by bridge.
											When complete it is planned to be home to almost half a million people and
											an economic hub to rival Hong Kong. The picturesque, high-density city
											aims to attract multinational corporations wishing to set up new headquarters
											for their Northeast Asian operations. Developers have declared New Songdo
											will be a free economic zone, with tax incentives and low-interest loans. It
											will feature international schools, hospitals and pharmacies, canals, a water
											shuttle, a golf course and a ‘green lung’ modelled on New York’s Central
											Park. The city will also become a test-bed for new technology.
											Seoul residents have already shown tremendous interest in the project
											and New Songdo apartments are rumoured to be selling fast. In the past
										</p>
									</section>
									<section id="endpoints--city-spots-overview">
										<h3>City Spots Overview</h3>
										<p>
											The city is a fact in nature, like a cave, a run of mackerel or an ant-heap. But
											it is also a conscious work of art, and it holds within its communal framework
											many simpler and more personal forms of art. Mind takes form in the city;
											and in turn, urban forms condition mind. – Lewis Mumford
											Some city planners have a vastly diff erent vision from the property developers,
											some would say less mercenary and certainly more environmentally
											sustainable. In the Arizona desert, north of Phoenix, a revolutionary city has
											been under construction since 1970. Its founder, Italian architect Paolo
											Soleri, hopes Arcosanti will inspire a change in the prevailing culture.
											Arcosanti is said to resemble the modernist urban Utopian designs of Le
											Corbusier and Sant’Elia. However, the principles of design are based on
											Soleri’s concept of ‘arcology’ (a fusion of architecture and ecology). His vision
											is for an organic sustainable city that fi ts into the ecological system rather
											than imposing itself upon it. For example, greenhouses beneath residential
											buildings generate solar energy for heating, as well as producing food. Soleri
											insists that when people come to Arcosanti they will be inspired and that
											when they leave they will begin to insist that genuinely sustainable principles
											start being applied to the development of their own cities.
											With an average of only 50 permanent residents who also work to construct
											the city, Arcosanti is on too small a scale to provide the technical solutions
											for the challenges that face the world’s major urban centres. However, in
											terms of the principles he has applied to his design, Soleri fulfi ls the role of a
											visionary, in that he believes that cities must become confl uent with the
											example set by nature if they are not to be destroyed by the same forces that
											give them life. He writes:
											In nature, as an organism evolves it increases in complexity and it also
											becomes a more compact or miniaturized system. Similarly a city should
											function as a living system… The city is the necessary instrument for the
											evolution of humankind
										</p>
									</section>
									<section id="endpoints--city-spot-detail">
										<h3>City Spot Detail</h3>
										<p>
											The city is a fact in nature, like a cave, a run of mackerel or an ant-heap. But
											it is also a conscious work of art, and it holds within its communal framework
											many simpler and more personal forms of art. Mind takes form in the city;
											and in turn, urban forms condition mind. – Lewis Mumford
											Some city planners have a vastly diff erent vision from the property developers,
											some would say less mercenary and certainly more environmentally
											sustainable. In the Arizona desert, north of Phoenix, a revolutionary city has
											been under construction since 1970. Its founder, Italian architect Paolo
											Soleri, hopes Arcosanti will inspire a change in the prevailing culture.
											Arcosanti is said to resemble the modernist urban Utopian designs of Le
											Corbusier and Sant’Elia. However, the principles of design are based on
											Soleri’s concept of ‘arcology’ (a fusion of architecture and ecology). His vision
											is for an organic sustainable city that fi ts into the ecological system rather
											than imposing itself upon it. For example, greenhouses beneath residential
											buildings generate solar energy for heating, as well as producing food. Soleri
											insists that when people come to Arcosanti they will be inspired and that
											when they leave they will begin to insist that genuinely sustainable principles
											start being applied to the development of their own cities.
											With an average of only 50 permanent residents who also work to construct
											the city, Arcosanti is on too small a scale to provide the technical solutions
											for the challenges that face the world’s major urban centres. However, in
											terms of the principles he has applied to his design, Soleri fulfi ls the role of a
											visionary, in that he believes that cities must become confl uent with the
											example set by nature if they are not to be destroyed by the same forces that
											give them life. He writes:
											In nature, as an organism evolves it increases in complexity and it also
											becomes a more compact or miniaturized system. Similarly a city should
											function as a living system… The city is the necessary instrument for the
											evolution of humankind
										</p>
									</section>
									{/* <section id="endpoints--city-icons-overview">
									<h3>City Icons Overview</h3>
									<p>…</p>
								</section>
								<section id="endpoints--city-icon-detail">
									<h3>City Icon Detail</h3>
									<p>…</p>
								</section> */}
								</section>
								<section id="links">
									<h2 style={{ fontSize: "16px", margin: 0 }}>Links</h2>
									<p>
										Its founder, Italian architect Paolo
										Soleri, hopes Arcosanti will inspire a change in the prevailing culture.
										Arcosanti is said to resemble the modernist urban Utopian designs of Le
										Corbusier and Sant’Elia. However, the principles of design are based on
										Soleri’s concept of ‘arcology’ (a fusion of architecture and ecology). His vision
										is for an organic sustainable city that fi ts into the ecological system rather
										than imposing itself upon it. For example, greenhouses beneath residential
										buildings generate solar energy for heating, as well as producing food. Soleri
										insists that when people come to Arcosanti they will be inspired and that
										when they leave they will begin to insist that genuinely sustainable principles
										start being applied to the development of their own cities.
										With an average of only 50 permanent residents who also work to construct
										the city, Arcosanti is on too small a scale to provide the technical solutions
										for the challenges that face the world’s major urban centres. However, in
										terms of the principles he has applied to his design, Soleri fulfi ls the role of a
										visionary, in that he believes that cities must become confl uent with the
										example set by nature if they are not to be destroyed by the same forces that
										give them life. He writes:
										In nature, as an organism evolves it increases in complexity and it also
										becomes a more compact or miniaturized system. Similarly a city should
										function as a living system… The city is the necessary instrument for the
										evolution of humankind
									</p>
								</section>
								<section id="expanders">
									<h2 style={{ fontSize: "16px", margin: 0 }}>Expanders</h2>
									<p>
										In view of the COVID-19 pandemic, it was felt imperative to reduce content load on students. The National Education Policy 2020 also emphasises reducing the content load and providing opportunities for experiential learning with creative mindset. In this background, the NCERT had undertaken the exercise to rationalise the textbooks across all classes and all subjects. Learning Outcomes already developed by the NCERT across classes had been taken into consideration in this exercise. Contents of the textbooks had been rationalised in view of the following:

										Content based on genres of literature in the textbooks and supplementary readers at different stages of school education
										Content that is meant for achieving Learning Outcomes for developing language proficiency and is accessible at different stages
										For reducing the curriculum load and examination stress in view of the prevailing condition of the Pandemic
										Content, which is easily accessible to students without much interventions from teachers and can be learned by children through self-learning or peer-learning
										Content, which is irrelevant in the present context. The present edition, is a reformatted version after carrying out the changes given above.
										The present textbooks uploaded in pdf form are rationalised textbooks. These were rationalised for the session 2022-23 and will continue in 2023-24.
									</p>
								</section>
								<section id="filters">
									<h2 style={{ fontSize: "16px", margin: 0 }}>Filters</h2>
									<p>
										Mind takes form in the city;
										and in turn, urban forms condition mind. – Lewis Mumford
										Some city planners have a vastly diff erent vision from the property developers,
										some would say less mercenary and certainly more environmentally
										sustainable. In the Arizona desert, north of Phoenix, a revolutionary city has
										been under construction since 1970. Its founder, Italian architect Paolo
										Soleri, hopes Arcosanti will inspire a change in the prevailing culture.
										Arcosanti is said to resemble the modernist urban Utopian designs of Le
										Corbusier and Sant’Elia. However, the principles of design are based on
										Soleri’s concept of ‘arcology’ (a fusion of architecture and ecology). His vision
										is for an organic sustainable city that fi ts into the ecological system rather
										than imposing itself upon it. For example, greenhouses beneath residential
										buildings generate solar energy for heating, as well as producing food. Soleri
										insists that when people come to Arcosanti they will be inspired and that
										when they leave they will begin to insist that genuinely sustainable principles
										start being applied to the development of their own cities.
										With an average of only 50 permanent residents who also work to construct
										the city, Arcosanti is on too small a scale to provide the technical solutions
										for the challenges that face the world’s major urban centres. However, in
										terms of the principles he has applied to his design, Soleri fulfi ls the role of a
										visionary, in that he believes that cities must become confl uent with the
										example set by nature if they are not to be destroyed by the same forces that
										give them life. He writes.
										Mind takes form in the city;
										and in turn, urban forms condition mind. – Lewis Mumford
										Some city planners have a vastly diff erent vision from the property developers,
										some would say less mercenary and certainly more environmentally
										sustainable. In the Arizona desert, north of Phoenix, a revolutionary city has
										been under construction since 1970. Its founder, Italian architect Paolo
										Soleri, hopes Arcosanti will inspire a change in the prevailing culture.
										Arcosanti is said to resemble the modernist urban Utopian designs of Le
										Corbusier and Sant’Elia. However, the principles of design are based on
										Soleri’s concept of ‘arcology’ (a fusion of architecture and ecology). His vision
										is for an organic sustainable city that fi ts into the ecological system rather
										than imposing itself upon it. For example, greenhouses beneath residential
										buildings generate solar energy for heating, as well as producing food. Soleri
										insists that when people come to Arcosanti they will be inspired and that
										when they leave they will begin to insist that genuinely sustainable principles
										start being applied to the development of their own cities.
										With an average of only 50 permanent residents who also work to construct
										the city, Arcosanti is on too small a scale to provide the technical solutions
										for the challenges that face the world’s major urban centres. However, in
										terms of the principles he has applied to his design, Soleri fulfi ls the role of a
										visionary, in that he believes that cities must become confl uent with the
										example set by nature if they are not to be destroyed by the same forces that
										give them life. He writes.
									</p>
								</section>
							</div>
							<nav className="section-nav scrollcontent">
								<ol>
									<li style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#introduction">Introduction</a></li>
									<li style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#request-response">Request &amp; Response</a></li>
									<li style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#authentication">Authentication</a></li>
									{/* <li><a href="#authentication">Chemical Basis</a></li>
								<li><a href="#authentication">Evolution</a></li>
								<li><a href="#authentication">Ecology</a></li>
								<li><a href="#authentication">Refrences</a></li> */}
									<li><a href="#endpoints" style={{ color: "blue" }}>Endpoints</a>
										<ul>
											<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#endpoints--root">Root</a></li>
											<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#endpoints--cities-overview">Cities Overview</a></li>
											<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#endpoints--city-detail">City Detail</a></li>
											<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#endpoints--city-config">City Config</a></li>
											<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#endpoints--city-spots-overview">City Spots Overview</a></li>
											<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#endpoints--city-spot-detail">City Spot Detail</a></li>
											{/* <li className=""><a href="#endpoints--city-icons-overview">City Icons Overview</a></li>
										<li className=""><a href="#endpoints--city-icon-detail">City Icon Detail</a></li> */}
										</ul>
									</li>
									<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#links">Links</a></li>
									<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#expanders">Expanders</a></li>
									<li className="" style={{ display: "flex",
        justifyContent: "start",gap:"5px",
    }}> <Rating/>&nbsp;<a href="#filters">Filters</a></li>
								</ol>

							</nav>
						</div>
					</div>




					<Dialog sx={{ borderColor: "2px solid green", top: "35%", left: "50%", height: "500px" }} open={open} onClose={handleClose} fullWidth maxWidth="md" >
						<DialogTitle style={{ padding: "3px 3px", backgroundColor: "#EFE8E4", fontSize: "1rem" }}>Please enter your question here and press&nbsp;
							<Button color="primary" style={{ backgroundColor: "white", color: "black", borderRadius: "10px", padding: "0px" }} onClick={handleClose}>
								Submit
							</Button>
						</DialogTitle>
						<DialogContent style={{ boxShadow: "inset24px 0 0 0 lightGreen, inset -20px 0 0 0 lightGreen, inset 0 -30px 0 0 lightGreen, inset 40px 0 0 0 lightGreen;" }}>
							<TextField
								name="questions"
								multiline
								rows={10}
								sx={{
									width: "100%",
								}}

								fullWidth
							// value={formData.email}
							// onChange={handleInputChange}
							/>
						</DialogContent>

					</Dialog>
					{/* </div> */}

					{/* <button className="open-button" >
        Chat
      </button> */}
					<div className="open-modal-question" onClick={() => openForm()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <b>Have Questions ? ask to your peers</b>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 20 20">
        <path fill="white" d="M10 3C7.796 3 6 4.796 6 7a.75.75 0 0 0 1.5 0c0-1.376 1.124-2.5 2.5-2.5s2.5 1.124 2.5 2.5c0 .597-.156.975-.368 1.27c-.232.325-.547.58-.969.92l-.01.008c-.4.323-.893.724-1.27 1.288c-.391.588-.633 1.313-.633 2.264v.5a.75.75 0 0 0 1.5 0v-.5c0-.674.164-1.105.382-1.432c.233-.349.552-.62.964-.953l.068-.055c.374-.302.834-.672 1.188-1.167C13.75 8.588 14 7.903 14 7c0-2.204-1.796-4-4-4m0 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
    </svg>
</div>

					<div className="chat-popup form-container" style={{ display: floatingOpen.openModal }}>
						{/* <form action="/action_page.php" className="form-container"> */}
						<h6 style={{ margin: "0px", padding: "3px 3px", backgroundColor: "#EFE8E4", fontSize: "1rem" }}>Please enter your question and submit


							{/* <svg style={{ justifyContent: "end" }} cursor="pointer" onClick={() => closeForm()} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="red" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg> */}

						</h6>
						<div>
							{/* <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" /> */}
							{/* <ReactQuill theme="snow"  /> */}
							<textarea placeholder="Type message.." name="msg" required></textarea>
						</div>
						<div style={{ alignItems: "end", display: "flex", justifyContent: "end" }}>
							<Button color="primary" style={{ backgroundColor: "grey", color: "white", borderRadius: "10px", padding: "2px" }} onClick={() => closeForm()}>
								Submit
							</Button>&emsp;
							<Button color="primary" style={{ backgroundColor: "rgb(250, 169, 23)", color: "white", borderRadius: "10px", padding: "2px" }} onClick={() => closeForm()}>
								Close
							</Button>
						</div>
						{/* </form> */}
					</div>

				</PageContainer>
				{/* </Box> */}
			</Card>
		</form>
	)
}








