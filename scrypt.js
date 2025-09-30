const words = {
    funny: {
        adjectives: ['Silly', 'Wacky', 'Goofy', 'Bonkers', 'Zany', 'Quirky', 'Nutty', 'Dizzy', 'Loopy', 'Wonky', 'Dopey', 'Clumsy', 'Giggly', 'Jumpy', 'Fluffy', 'Bouncy', 'Wobbly', 'Squishy', 'Blobby', 'Derpy', 'Snazzy', 'Nifty', 'Funky', 'Jazzy', 'Peppy', 'Zippy', 'Snappy', 'Perky', 'Chipper', 'Jolly', 'Merry', 'Giddy', 'Bubbly', 'Fizzy', 'Sparky', 'Snappy', 'Zippy', 'Whacky', 'Kooky', 'Screwy', 'Daffy', 'Batty', 'Loony', 'Dippy', 'Dotty', 'Balmy', 'Barmy', 'Potty', 'Crackers', 'Daft', 'Mad', 'Bonkers', 'Absurd', 'Ridiculous', 'Hilarious', 'Comical', 'Amusing', 'Laughable', 'Hysterical', 'Uproarious', 'Sidesplitting', 'Riotous', 'Mirthful', 'Gleeful', 'Jovial', 'Jocund', 'Jocular', 'Facetious', 'Waggish', 'Droll', 'Witty', 'Humorous', 'Entertaining', 'Diverting', 'Pleasant', 'Delightful', 'Enjoyable', 'Agreeable', 'Satisfying', 'Gratifying', 'Rewarding', 'Fulfilling', 'Pleasing', 'Nice', 'Good', 'Great', 'Wonderful', 'Marvelous', 'Fabulous', 'Terrific', 'Fantastic', 'Magnificent', 'Splendid', 'Superb', 'Excellent', 'Outstanding', 'Exceptional', 'Remarkable', 'Phenomenal', 'Extraordinary', 'Incredible', 'Amazing', 'Astonishing', 'Astounding', 'Staggering', 'Stunning', 'Breathtaking', 'Awe-inspiring', 'Mind-blowing', 'Mind-boggling', 'Unbelievable', 'Inconceivable', 'Unthinkable', 'Unimaginable'],
        nouns: ['Pickle', 'Noodle', 'Waffle', 'Nugget', 'Muffin', 'Burrito', 'Taco', 'Pancake', 'Doughnut', 'Pretzel', 'Bagel', 'Croissant', 'Biscuit', 'Cookie', 'Cupcake', 'Brownie', 'Pudding', 'Jello', 'Custard', 'Flan', 'Mousse', 'Tart', 'Pie', 'Cake', 'Torte', 'Scone', 'Crumpet', 'Dumpling', 'Fritter', 'Pastry', 'Strudel', 'Turnover', 'Cobbler', 'Crisp', 'Crumble', 'Buckle', 'Grunt', 'Slump', 'Pandowdy', 'Sonker', 'Penguin', 'Platypus', 'Llama', 'Alpaca', 'Narwhal', 'Walrus', 'Otter', 'Beaver', 'Squirrel', 'Chipmunk', 'Hamster', 'Gerbil', 'Guinea Pig', 'Hedgehog', 'Porcupine', 'Armadillo', 'Anteater', 'Sloth', 'Koala', 'Wombat', 'Kangaroo', 'Wallaby', 'Opossum', 'Raccoon', 'Skunk', 'Badger', 'Ferret', 'Weasel', 'Mink', 'Stoat', 'Ermine', 'Marten', 'Sable', 'Polecat', 'Mongoose', 'Meerkat', 'Lemur', 'Loris', 'Tarsier', 'Galago', 'Bushbaby', 'Gibbon', 'Orangutan', 'Gorilla', 'Chimpanzee', 'Bonobo', 'Baboon', 'Mandrill', 'Macaque', 'Marmoset', 'Tamarin', 'Capuchin', 'Spider Monkey', 'Howler Monkey', 'Squirrel Monkey', 'Vervet', 'Colobus', 'Proboscis', 'Snub-nosed', 'Langur', 'Douc', 'Surili', 'Hanuman', 'Patas', 'Guenon', 'Mangabey', 'Drill', 'Gelada', 'Titi', 'Saki', 'Uakari', 'Woolly', 'Muriqui', 'Night', 'Douroucouli', 'Potato', 'Banana', 'Kumquat', 'Papaya', 'Mango', 'Kiwi', 'Apricot', 'Nectarine', 'Peach', 'Plum', 'Cherry', 'Grape', 'Melon', 'Berry', 'Raisin', 'Fig', 'Date', 'Prune', 'Pomegranate', 'Persimmon']
    },
    cool: {
        adjectives: ['Dark', 'Shadow', 'Mystic', 'Phantom', 'Ghost', 'Cyber', 'Neon', 'Electric', 'Thunder', 'Storm', 'Blaze', 'Inferno', 'Frost', 'Ice', 'Arctic', 'Polar', 'Nordic', 'Lunar', 'Solar', 'Cosmic', 'Astral', 'Stellar', 'Galactic', 'Nebula', 'Nova', 'Supernova', 'Quantum', 'Atomic', 'Nuclear', 'Fusion', 'Plasma', 'Photon', 'Neutron', 'Proton', 'Electron', 'Quark', 'Neutrino', 'Boson', 'Graviton', 'Tachyon', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Omega', 'Sigma', 'Prime', 'Ultra', 'Mega', 'Giga', 'Tera', 'Meta', 'Hyper', 'Super', 'Turbo', 'Nitro', 'Razor', 'Viper', 'Cobra', 'Python', 'Dragon', 'Phoenix', 'Griffin', 'Kraken', 'Titan', 'Atlas', 'Zeus', 'Thor', 'Odin', 'Loki', 'Ares', 'Mars', 'Hades', 'Poseidon', 'Neptune', 'Apollo', 'Artemis', 'Athena', 'Hermes', 'Mercury', 'Venus', 'Juno', 'Minerva', 'Vulcan', 'Pluto', 'Jupiter', 'Saturn', 'Uranus', 'Orion', 'Sirius', 'Vega', 'Polaris', 'Altair', 'Deneb', 'Rigel', 'Betelgeuse', 'Antares', 'Spica', 'Regulus', 'Aldebaran', 'Arcturus', 'Capella', 'Castor', 'Pollux', 'Procyon', 'Achernar', 'Canopus', 'Fomalhaut', 'Hadar', 'Mimosa', 'Acrux', 'Shaula', 'Bellatrix', 'Alnilam', 'Alnitak', 'Mintaka', 'Saiph', 'Meissa', 'Hatsya', 'Ensis'],
        nouns: ['Wolf', 'Tiger', 'Lion', 'Panther', 'Jaguar', 'Leopard', 'Cheetah', 'Puma', 'Cougar', 'Lynx', 'Bobcat', 'Ocelot', 'Caracal', 'Serval', 'Hawk', 'Eagle', 'Falcon', 'Raven', 'Crow', 'Rook', 'Raptor', 'Hunter', 'Warrior', 'Knight', 'Samurai', 'Ninja', 'Ronin', 'Shogun', 'Daimyo', 'Assassin', 'Mercenary', 'Soldier', 'Gladiator', 'Spartan', 'Viking', 'Berserker', 'Reaper', 'Slayer', 'Destroyer', 'Annihilator', 'Obliterator', 'Decimator', 'Terminator', 'Executioner', 'Eliminator', 'Eradicator', 'Exterminator', 'Avenger', 'Punisher', 'Vigilante', 'Guardian', 'Sentinel', 'Protector', 'Defender', 'Champion', 'Titan', 'Colossus', 'Behemoth', 'Juggernaut', 'Leviathan', 'Goliath', 'Hercules', 'Samson', 'Blade', 'Sword', 'Saber', 'Katana', 'Scimitar', 'Rapier', 'Cutlass', 'Claymore', 'Broadsword', 'Longsword', 'Shortsword', 'Dagger', 'Dirk', 'Stiletto', 'Machete', 'Cleaver', 'Axe', 'Hatchet', 'Tomahawk', 'Mace', 'Flail', 'Morningstar', 'Warhammer', 'Maul', 'Club', 'Cudgel', 'Baton', 'Staff', 'Quarterstaff', 'Bo', 'Spear', 'Lance', 'Pike', 'Halberd', 'Glaive', 'Scythe', 'Trident', 'Chakram', 'Shuriken', 'Kunai', 'Nunchaku', 'Tonfa', 'Sai', 'Kama', 'Kusarigama', 'Meteor', 'Comet', 'Asteroid', 'Eclipse', 'Nexus', 'Vortex', 'Matrix', 'Vector', 'Vertex', 'Apex', 'Zenith', 'Nadir', 'Axis', 'Core', 'Pulse', 'Wave', 'Surge', 'Flux', 'Flow', 'Stream', 'Current', 'Tide', 'Rift', 'Void', 'Abyss', 'Chasm', 'Canyon', 'Gorge', 'Ravine', 'Valley', 'Peak', 'Summit', 'Crest', 'Ridge', 'Cliff', 'Precipice', 'Edge', 'Brink', 'Verge', 'Threshold', 'Boundary', 'Limit', 'Horizon', 'Frontier']
    },
    short: {
        adjectives: ['Red', 'Blue', 'Dark', 'Neo', 'Max', 'Ace', 'Fox', 'Jet', 'Sky', 'Ray', 'Zap', 'Hex', 'Lex', 'Rex', 'Dex', 'Vex', 'Tex', 'Pax', 'Lux', 'Nix', 'Jax', 'Kix', 'Zix', 'Bix', 'Fix', 'Mix', 'Pix', 'Rix', 'Six', 'Tix', 'Wix', 'Xix', 'Yix', 'Zen', 'Zap', 'Zip', 'Zep', 'Zop', 'Zup', 'Zan', 'Zon', 'Zin', 'Zun', 'Zen', 'Key', 'Bay', 'Day', 'Jay', 'Kay', 'Lay', 'May', 'Pay', 'Ray', 'Say', 'Way', 'Yay', 'Bro', 'Pro', 'Fro', 'Gro', 'Tro', 'Cry', 'Dry', 'Fly', 'Fry', 'Pry', 'Shy', 'Sky', 'Sly', 'Spy', 'Try', 'Why', 'Van', 'Dan', 'Fan', 'Man', 'Pan', 'Ran', 'Tan', 'Wan', 'Ban', 'Can', 'Den', 'Hen', 'Ken', 'Men', 'Pen', 'Ten', 'Yen', 'Zen', 'Big', 'Dig', 'Fig', 'Gig', 'Jig', 'Pig', 'Rig', 'Wig', 'Zig', 'Top', 'Hop', 'Mop', 'Pop', 'Bop', 'Cop', 'Lop', 'Sop', 'Hot', 'Dot', 'Got', 'Jot', 'Lot', 'Not', 'Pot', 'Rot', 'Tot', 'Box', 'Cox', 'Fox', 'Lox', 'Ox', 'Pox', 'Sox', 'Vox', 'Wax', 'Bee', 'Fee', 'Gee', 'Lee', 'Pee', 'See', 'Tee', 'Wee', 'Zee', 'Ice', 'Ace', 'Gem', 'Vim', 'Zap', 'Elf'],
        nouns: ['Cat', 'Dog', 'Fox', 'Owl', 'Bat', 'Rat', 'Bee', 'Ant', 'Fly', 'Bug', 'Cub', 'Pup', 'Kid', 'Fawn', 'Foal', 'Calf', 'Lamb', 'Joey', 'Kit', 'Pup', 'Cub', 'Cub', 'Ace', 'Axe', 'Bow', 'Gun', 'Rod', 'Net', 'Web', 'Key', 'Lock', 'Box', 'Chest', 'Gem', 'Orb', 'Rod', 'Staff', 'Wand', 'Ring', 'Crown', 'Helm', 'Cape', 'Cloak', 'Mask', 'Shield', 'Armor', 'Plate', 'Mail', 'Cuirass', 'Helm', 'Cap', 'Hood', 'Hat', 'Boot', 'Glove', 'Gauntlet', 'Belt', 'Sash', 'Scarf', 'Wrap', 'Band', 'Cuff', 'Strap', 'Cord', 'Rope', 'Chain', 'Link', 'Bond', 'Tie', 'Knot', 'Loop', 'Hook', 'Clasp', 'Pin', 'Bolt', 'Nail', 'Screw', 'Rivet', 'Stud', 'Spike', 'Thorn', 'Claw', 'Fang', 'Horn', 'Tusk', 'Beak', 'Talon', 'Hoof', 'Paw', 'Fin', 'Wing', 'Tail', 'Mane', 'Fur', 'Hide', 'Pelt', 'Skin', 'Scale', 'Shell', 'Carapace', 'Exo', 'Endo', 'Bio', 'Cyber', 'Mech', 'Tech', 'Bot', 'Droid', 'Android', 'Cyborg', 'AI', 'CPU', 'GPU', 'RAM', 'ROM', 'SSD', 'HDD', 'USB', 'LAN', 'WAN', 'WiFi', 'Byte', 'Bit', 'Code', 'Data', 'File', 'Disk', 'Core', 'Node', 'Link', 'Port', 'Hub', 'Net', 'Web', 'Site', 'Page', 'App', 'Pro', 'Max', 'Plus', 'Air', 'Mini', 'Lite', 'Go', 'Now']
    },
    aesthetic: {
        adjectives: ['Ethereal', 'Serene', 'Velvet', 'Silk', 'Satin', 'Pearl', 'Opal', 'Ruby', 'Sapphire', 'Emerald', 'Diamond', 'Crystal', 'Quartz', 'Jade', 'Amber', 'Ivory', 'Ebony', 'Azure', 'Cerulean', 'Crimson', 'Scarlet', 'Vermillion', 'Magenta', 'Violet', 'Lavender', 'Lilac', 'Mauve', 'Periwinkle', 'Indigo', 'Cobalt', 'Turquoise', 'Teal', 'Aqua', 'Cyan', 'Mint', 'Lime', 'Olive', 'Sage', 'Moss', 'Forest', 'Pine', 'Juniper', 'Cedar', 'Willow', 'Aspen', 'Birch', 'Maple', 'Oak', 'Elm', 'Ash', 'Hazel', 'Rowan', 'Holly', 'Ivy', 'Fern', 'Moss', 'Lichen', 'Coral', 'Reef', 'Ocean', 'Sea', 'Bay', 'Cove', 'Shore', 'Coast', 'Beach', 'Dune', 'Sand', 'Shell', 'Starfish', 'Conch', 'Nautilus', 'Ammonite', 'Trilobite', 'Fossil', 'Ancient', 'Primeval', 'Eternal', 'Timeless', 'Ageless', 'Undying', 'Immortal', 'Everlasting', 'Perpetual', 'Endless', 'Infinite', 'Boundless', 'Limitless', 'Measureless', 'Immeasurable', 'Incalculable', 'Innumerable', 'Countless', 'Myriad', 'Multitudinous', 'Manifold', 'Sundry', 'Various', 'Diverse', 'Varied', 'Assorted', 'Mixed', 'Miscellaneous', 'Heterogeneous', 'Eclectic', 'Multifarious', 'Omnifarious', 'Protean', 'Polymorphic', 'Metamorphic', 'Transfigured', 'Transmuted', 'Transformed', 'Converted', 'Changed', 'Altered', 'Modified', 'Adjusted', 'Adapted', 'Refined', 'Polished', 'Burnished', 'Lustrous', 'Glossy', 'Shiny', 'Gleaming', 'Glittering', 'Sparkling', 'Shimmering', 'Glimmering', 'Glistening', 'Twinkling', 'Scintillating', 'Coruscating', 'Lambent', 'Lucent', 'Luminous', 'Radiant', 'Brilliant', 'Resplendent', 'Effulgent', 'Refulgent', 'Splendorous', 'Glorious', 'Magnificent'],
        nouns: ['Moon', 'Star', 'Cloud', 'Mist', 'Dawn', 'Dusk', 'Aurora', 'Twilight', 'Meadow', 'Garden', 'Blossom', 'Petal', 'Rose', 'Lily', 'Lotus', 'Orchid', 'Daisy', 'Tulip', 'Iris', 'Violet', 'Jasmine', 'Gardenia', 'Magnolia', 'Azalea', 'Camellia', 'Peony', 'Dahlia', 'Zinnia', 'Cosmos', 'Aster', 'Marigold', 'Sunflower', 'Poppy', 'Pansy', 'Petunia', 'Snapdragon', 'Hollyhock', 'Foxglove', 'Delphinium', 'Larkspur', 'Columbine', 'Anemone', 'Ranunculus', 'Freesia', 'Gladiolus', 'Narcissus', 'Daffodil', 'Hyacinth', 'Crocus', 'Snowdrop', 'Primrose', 'Bluebell', 'Harebell', 'Bellflower', 'Canterbury', 'Hosta', 'Fuchsia', 'Begonia', 'Impatiens', 'Geranium', 'Salvia', 'Verbena', 'Lantana', 'Vinca', 'Periwinkle', 'Thyme', 'Rosemary', 'Lavender', 'Sage', 'Basil', 'Mint', 'Oregano', 'Marjoram', 'Tarragon', 'Chervil', 'Parsley', 'Cilantro', 'Coriander', 'Fennel', 'Dill', 'Anise', 'Caraway', 'Cumin', 'Cardamom', 'Cinnamon', 'Nutmeg', 'Clove', 'Allspice', 'Ginger', 'Turmeric', 'Saffron', 'Vanilla', 'Cocoa', 'Chocolate', 'Caramel', 'Honey', 'Sugar', 'Syrup', 'Nectar', 'Ambrosia', 'Elixir', 'Potion', 'Essence', 'Spirit', 'Soul', 'Heart', 'Dream', 'Vision', 'Fantasy', 'Reverie', 'Daydream', 'Illusion', 'Mirage', 'Phantom', 'Specter', 'Wraith', 'Apparition', 'Shadow', 'Silhouette', 'Echo', 'Whisper', 'Murmur', 'Sigh', 'Breath', 'Breeze', 'Zephyr', 'Wind', 'Gale', 'Storm', 'Tempest', 'Hurricane', 'Typhoon', 'Cyclone', 'Tornado', 'Whirlwind', 'Maelstrom', 'Vortex', 'Eddy', 'Swirl', 'Spiral', 'Helix', 'Coil', 'Curl', 'Wave', 'Ripple', 'Tide', 'Current', 'Flow', 'Stream', 'Brook', 'Creek', 'River', 'Lake', 'Pond', 'Pool', 'Spring', 'Fountain']
    },
    general: {
        adjectives: ['Wild', 'Bold', 'Swift', 'Brave', 'Wise', 'Noble', 'Royal', 'Grand', 'Great', 'Mighty', 'Strong', 'Power', 'Epic', 'Legend', 'Hero', 'Magic', 'Divine', 'Sacred', 'Holy', 'Pure', 'True', 'Real', 'Genuine', 'Authentic', 'Original', 'Unique', 'Special', 'Rare', 'Precious', 'Valuable', 'Prized', 'Treasured', 'Cherished', 'Beloved', 'Dear', 'Sweet', 'Kind', 'Gentle', 'Tender', 'Soft', 'Smooth', 'Silky', 'Velvety', 'Fluffy', 'Fuzzy', 'Cozy', 'Warm', 'Hot', 'Fire', 'Flame', 'Burning', 'Blazing', 'Scorching', 'Searing', 'Blistering', 'Sweltering', 'Torrid', 'Sultry', 'Muggy', 'Humid', 'Sticky', 'Clammy', 'Moist', 'Damp', 'Wet', 'Soggy', 'Drenched', 'Soaked', 'Saturated', 'Waterlogged', 'Flooded', 'Submerged', 'Immersed', 'Plunged', 'Dunked', 'Dipped', 'Baptized', 'Anointed', 'Blessed', 'Sanctified', 'Consecrated', 'Hallowed', 'Venerated', 'Revered', 'Worshipped', 'Adored', 'Idolized', 'Glorified', 'Exalted', 'Elevated', 'Lifted', 'Raised', 'Hoisted', 'Heaved', 'Boosted', 'Promoted', 'Advanced', 'Progressed', 'Proceeded', 'Continued', 'Persisted', 'Persevered', 'Endured', 'Lasted', 'Remained', 'Stayed', 'Lingered', 'Tarried', 'Dawdled', 'Loitered', 'Idled', 'Lounged', 'Relaxed', 'Rested', 'Reclined', 'Reposed', 'Slumbered', 'Dozed', 'Napped', 'Snoozed', 'Slept', 'Dreamed', 'Imagined', 'Envisioned', 'Pictured', 'Visualized', 'Conceived', 'Devised', 'Contrived', 'Invented', 'Created', 'Made', 'Formed', 'Shaped', 'Molded', 'Fashioned', 'Crafted', 'Built', 'Constructed', 'Erected', 'Assembled', 'Fabricated', 'Manufactured', 'Produced', 'Generated', 'Spawned', 'Bred', 'Propagated', 'Multiplied', 'Proliferated', 'Burgeoned', 'Flourished', 'Thrived', 'Prospered', 'Succeeded', 'Triumphed', 'Prevailed', 'Won', 'Conquered', 'Vanquished', 'Defeated', 'Overcame', 'Surmounted', 'Mastered', 'Dominated', 'Ruled', 'Reigned', 'Governed', 'Controlled', 'Commanded', 'Directed', 'Managed', 'Administered', 'Supervised', 'Oversaw', 'Monitored', 'Watched', 'Observed', 'Noticed', 'Detected', 'Spotted', 'Discerned', 'Perceived', 'Sensed', 'Felt', 'Experienced', 'Underwent', 'Suffered', 'Bore', 'Tolerated', 'Withstood', 'Sustained', 'Maintained', 'Preserved', 'Conserved', 'Protected', 'Guarded', 'Defended', 'Shielded', 'Sheltered', 'Harbored', 'Housed', 'Lodged', 'Accommodated', 'Hosted', 'Entertained', 'Amused', 'Diverted', 'Distracted', 'Occupied', 'Engaged', 'Absorbed', 'Engrossed', 'Immersed', 'Involved', 'Participated', 'Partook', 'Shared', 'Contributed', 'Donated', 'Gave', 'Offered', 'Presented', 'Bestowed', 'Granted', 'Awarded', 'Conferred', 'Imparted', 'Transmitted', 'Conveyed', 'Communicated', 'Expressed', 'Voiced', 'Articulated', 'Uttered', 'Spoke', 'Said', 'Told', 'Narrated', 'Related', 'Recounted', 'Described', 'Depicted', 'Portrayed', 'Represented', 'Symbolized', 'Signified', 'Denoted', 'Indicated', 'Suggested', 'Implied', 'Hinted', 'Alluded', 'Referred', 'Mentioned', 'Cited', 'Quoted', 'Paraphrased', 'Summarized', 'Recapped'],
        nouns: ['Bear', 'Deer', 'Moose', 'Elk', 'Bison', 'Buffalo', 'Ox', 'Bull', 'Cow', 'Calf', 'Steer', 'Heifer', 'Horse', 'Mare', 'Stallion', 'Gelding', 'Colt', 'Filly', 'Pony', 'Donkey', 'Mule', 'Zebra', 'Giraffe', 'Elephant', 'Rhino', 'Hippo', 'Camel', 'Dromedary', 'Gazelle', 'Antelope', 'Impala', 'Springbok', 'Oryx', 'Eland', 'Kudu', 'Nyala', 'Bushbuck', 'Waterbuck', 'Reedbuck', 'Kob', 'Lechwe', 'Puku', 'Hartebeest', 'Wildebeest', 'Gnu', 'Topi', 'Bontebok', 'Blesbok', 'Gemsbok', 'Sable', 'Roan', 'Addax', 'Scimitar', 'Dama', 'Dorcas', 'Mountain', 'Goat', 'Sheep', 'Ram', 'Ewe', 'Lamb', 'Goat', 'Billy', 'Nanny', 'Kid', 'Ibex', 'Markhor', 'Tahr', 'Serow', 'Goral', 'Chamois', 'Muskox', 'Yak', 'Gaur', 'Banteng', 'Kouprey', 'Anoa', 'Tamaraw', 'Wisent', 'Aurochs', 'Urus', 'Zebu', 'Watusi', 'Longhorn', 'Shorthorn', 'Hereford', 'Angus', 'Brahman', 'Charolais', 'Limousin', 'Simmental', 'Gelbvieh', 'Salers', 'Maine', 'Anjou', 'Blonde', 'Aquitaine', 'Chianina', 'Marchigiana', 'Romagnola', 'Piemontese', 'Maremmana', 'Podolica', 'Tarentaise', 'Vosgienne', 'Montbeliarde', 'Abondance', 'Ferrandaise', 'Aubrac', 'Bazadaise', 'Bearnaise', 'Blanc', 'Bleu', 'Bordelaise', 'Bretonne', 'Armoricaine', 'Froment', 'Leon', 'Maraichine', 'Mirandaise', 'Nantaise', 'Parthenaise', 'Rouge', 'Flamande', 'Villard', 'Bourbonnais', 'Charollaise', 'Pie', 'Rouge', 'Est', 'Normande', 'Jersiaise', 'Guernesey', 'Sark', 'Alderney', 'Kerry', 'Dexter', 'Ayrshire', 'Galloway', 'Belted', 'White', 'Highland', 'Luing', 'Whitebred', 'Beef', 'Welsh', 'Black', 'Red', 'Poll', 'Lincoln', 'South', 'Devon', 'Sussex', 'Longhorn', 'Dairy', 'Shorthorn', 'British', 'White', 'Murray', 'Grey', 'Ranger', 'Barzona', 'Beefmaster', 'Braford', 'Brangus', 'Charbray', 'Santa', 'Gertrudis', 'Senepol', 'Simbrah', 'Tarentaise', 'Tuli', 'Wagyu', 'Corriente', 'Criollo', 'Romosinuano', 'Bonsmara', 'Drakensberger', 'Nguni', 'Afrikaner', 'Boran', 'Sahiwal', 'Red', 'Sindhi', 'Gir', 'Kankrej', 'Tharparkar', 'Hariana', 'Ongole', 'Bachaur', 'Dangi', 'Gaolao', 'Krishna', 'Valley', 'Khillari', 'Kangayam', 'Bargur', 'Umblachery', 'Alambadi', 'Pulikulam', 'Hallikar', 'Amrit', 'Mahal', 'Ponwar', 'Mewati', 'Nagori', 'Rathi']
    }
};

const history = [];
let generatedUsernames = new Set();

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10000);
}

function getActiveFilters() {
    const filters = [];
    document.querySelectorAll('.filter-checkbox:checked').forEach(checkbox => {
        filters.push(checkbox.id);
    });
    return filters.length > 0 ? filters : ['general'];
}

function generateUsername() {
    const filters = getActiveFilters();
    const shortFilter = filters.includes('short');
    
    let adjective, noun, number;
    let attempts = 0;
    let username;
    
    do {
        const randomFilter = getRandomElement(filters);
        const wordPool = words[randomFilter] || words.general;
        
        adjective = getRandomElement(wordPool.adjectives);
        noun = getRandomElement(wordPool.nouns);
        number = getRandomNumber();
        
        if (shortFilter && Math.random() > 0.5) {
            username = `${adjective}${noun}`;
        } else if (Math.random() > 0.3) {
            username = `${adjective}${noun}${number}`;
        } else {
            username = `${adjective}${noun}`;
        }
        
        username = username.replace(/\s+/g, '');
        attempts++;
        
    } while (generatedUsernames.has(username) && attempts < 50);
    
    generatedUsernames.add(username);
    return username;
}

function displayUsername(username) {
    const resultDiv = document.getElementById('result');
    const usernameEl = document.getElementById('username');
    
    usernameEl.textContent = username;
    resultDiv.classList.remove('hidden');
    
    usernameEl.classList.add('animate-bounce');
    setTimeout(() => {
        usernameEl.classList.remove('animate-bounce');
    }, 500);
}

function addToHistory(username) {
    history.unshift(username);
    if (history.length > 5) {
        history.pop();
    }
    
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyDiv = document.getElementById('history');
    const historySection = document.getElementById('historySection');
    
    if (history.length === 0) {
        historySection.classList.add('hidden');
        return;
    }
    
    historySection.classList.remove('hidden');
    historyDiv.innerHTML = history.map(username => `
        <div class="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 flex items-center justify-between">
            <span>${username}</span>
            <button onclick="copyToClipboard('${username}')" class="text-purple-600 hover:text-purple-800 text-sm">Copy</button>
        </div>
    `).join('');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification();
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('translate-x-full');
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
    }, 2000);
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const username = generateUsername();
    displayUsername(username);
    addToHistory(username);
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const username = document.getElementById('username').textContent;
    copyToClipboard(username);
});

document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (document.getElementById('result').classList.contains('hidden') === false) {
            const username = generateUsername();
            displayUsername(username);
            addToHistory(username);
        }
    });
});
