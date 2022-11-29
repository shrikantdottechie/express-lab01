const express = require('express');
// require('dotenv').config()
const app = express();
const fs = require('fs')
app.engine('hypatia', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title >' + options.title + '</title>')
            .replace('#img#', `<img src=${options.img} + 'width="300" height="400">"`)
            .replace('#message#', '<h1 style="color: blue">' + options.message + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'hypatia')
app.listen(3000, function () {
    console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
    res.render('1', {
        title: 'Welcome!', message: 'This is my home page.', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    })
})

app.get('/slamdunk', (req, res) => {
    res.render('2', {
        title: 'Slam Dunk', message: 'Slam Dunk', img: 'https://cdn.myanimelist.net/images/manga/2/258749.jpg', content: 'Hanamichi Sakuragi, a tall, boisterous teenager with flame-red hair and physical strength beyond his years, is eager to put an end to his rejection streak of 50 and finally score a girlfriend as he begins his first year of Shohoku High. However, his reputation for delinquency and destructiveness precedes him, and most of his fellow students subsequently avoid him like the plague. As his first day of school ends, he is left with two strong thoughts: "I hate basketball" and "I need a girlfriend."'



    })
})

app.get('/landofthelustrous', (req, res) => {
    res.render('2', {
        title: 'Land of the Lustrous', message: 'READ THIS', img: 'https://cdn.myanimelist.net/images/manga/1/115443.jpg', content: 'Long ago, Earth was struck by six meteorites, creating six moons and leaving a lone island in their wake. Those who could not make it to the island sank to the bottom of the ocean, where, over time, they slowly turned to crystal. As countless millennia passed, 28 of these crystallized lifeforms, known as the Lustrous, rose from the depths and resided on the island. Led by the wise Kongou-sensei, they must defend themselves against the seemingly infinite number of Lunarians, inhabitants of the moons who seek to harvest their valuable bodies for crafting weapons and jewelry.'
    })
})

app.get('/ChainsawMan', (req, res) => {
    res.render('2', {
        title: 'Chainsaw Man', message: 'Straight Fire', img: 'https://cdn.myanimelist.net/images/manga/3/216464.jpg', content: 'Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.'


    })
})

app.get('/Vagabond', (req, res) => {
    res.render('2', {
        title: 'Vagabond', message: 'Vagabond', img: 'https://cdn.myanimelist.net/images/manga/1/259070.jpg', content: `In 16th-century Japan, Shinmen Takezou is a wild, rough young man, in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life. The pair enlist in the Toyotomi army, yearning for glory—but when the Toyotomi suffer a crushing defeat at the hands of the Tokugawa Clan at the Battle of Sekigahara, the friends barely make it out alive.

        After the two are separated, Shinmen returns home on a self-appointed mission to notify the Hon'iden family of Matahachi's survival. He instead finds himself a wanted criminal, framed for his friend's supposed murder based on his history of violence. Upon being captured, he is strung up on a tree and left to die. An itinerant monk, the distinguished Takuan Soho, takes pity on the "devil child," secretly freeing Shinmen and christening him with a new name to avoid pursuit by the authorities: Musashi Miyamoto.
        
        Vagabond is the fictitious retelling of the life of one of Japan's most renowned swordsmen, the "Sword Saint" Musashi Miyamoto—his rise from a swordsman with no desire other than to become "Invincible Under the Heavens" to an enlightened warrior who slowly learns of the importance of close friends, self-reflection, and life itself.`
    })
})

app.get('/20thCenturyBoys', (req, res) => {
    res.render('2', {
        title: '20th Century Boys', message: '20th Century Boys', img: 'https://cdn.myanimelist.net/images/manga/5/260006.jpg', content: `As the 20th century approaches its end, people all over the world are anxious that the world is changing. And probably not for the better.

        Kenji Endo is a normal convenience store manager who's just trying to get by. But when he learns that one of his old friends going by the name "Donkey" has suddenly committed suicide, and that a new cult led by a figure known as "Friend" is becoming more notorious, Kenji starts to feel that something isn't right. With a few key clues left behind by his deceased friend, Kenji realizes that this cult is much more than he ever thought it would be—not only is this mysterious organization directly targeting him and his childhood friends, but the whole world also faces a grave danger that only the friends have the key to stop.
        
        Kenji's simple life of barely making ends meet is flipped upside down when he reunites with his childhood friends, and together they must figure out the truth of how their past is connected to the cult, as the turn of the century could mean the possible end of the world.
        `
    })
})

app.get('/Dorohedoro', (req, res) => {
    res.render('2', {
        title: 'Dorohedoro', message: 'Dorohedoro', img: 'https://cdn.myanimelist.net/images/manga/3/258246.jpg', content: `Hole—a dark, decrepit, and disorderly district where the strong prey on the weak and death is an ordinary occurrence—is all but befitting of the name given to it. A realm separated from law and ethics, it is a testing ground to the magic users who dominate it. As a race occupying the highest rungs of their society, the magic users think of the denizens of Hole as no more than insects. Murdered, mutilated, and made experiments without a second thought, the powerless Hole dwellers litter the halls of Hole's hospital on a daily basis.

        Possessing free access to and from the cesspool, and with little challenge to their authority, the magic users appear indomitable to most—aside for a few. Caiman, more reptile than man, is one such individual. He hunts them on a heedless quest for answers with only a trusted pair of bayonets and his immunity to magic. Cursed by his appearance and tormented by nightmares, magic users are his only clue to restoring his life to normal. With his biggest obstacle being his stomach, his female companion Nikaidou, who runs the restaurant Hungry Bug, is his greatest ally.
        
        Set in a gritty world of hellish design, Dorohedoro manages a healthy blend of comedy and lightheartedness with death and carnage. Taking plenty of twists and turns while following the lives of Hole's residents, it weaves a unique world of unearthly origin and dreary appearance not for the squeamish or easily disturbed.`
    })
})
app.get('/SteelBallRun', (req, res) => {
    res.render('2', {
        title: 'Steel Ball Run', message: 'Best Jojo part', img: `https://cdn.myanimelist.net/images/manga/3/179882.jpg`, content: `In the American Old West, the world's greatest race is about to begin. Thousands line up in San Diego to travel over six thousand kilometers for a chance to win the grand prize of fifty million dollars. With the era of the horse reaching its end, contestants are allowed to use any kind of vehicle they wish. Competitors will have to endure grueling conditions, traveling up to a hundred kilometers a day through uncharted wastelands. The Steel Ball Run is truly a one-of-a-kind event.

        The youthful Johnny Joestar, a crippled former horse racer, has come to San Diego to watch the start of the race. There he encounters Gyro Zeppeli, a racer with two steel balls at his waist instead of a gun. Johnny witnesses Gyro using one of his steel balls to unleash a fantastical power, compelling a man to fire his gun at himself during a duel. In the midst of the action, Johnny happens to touch the steel ball and feels a power surging through his legs, allowing him to stand up for the first time in two years. Vowing to find the secret of the steel balls, Johnny decides to compete in the race, and so begins his bizarre adventure across America on the Steel Ball Run.`
    })
})
app.get('/JujutsuKaisen', (req, res) => {
    res.render('2', {
        title: 'JJK', message: 'Favorite New Age Shonen', img: 'https://cdn.myanimelist.net/images/manga/3/210341.jpg', content: `Hidden in plain sight, an age-old conflict rages on. Supernatural monsters known as "Curses" terrorize humanity from the shadows, and powerful humans known as "Jujutsu" sorcerers use mystical arts to exterminate them. When high school student Yuuji Itadori finds a dried-up finger of the legendary Curse Sukuna Ryoumen, he suddenly finds himself joining this bloody conflict.

        Attacked by a Curse attracted to the finger's power, Yuuji makes a reckless decision to protect himself, gaining the power to combat Curses in the process but also unwittingly unleashing the malicious Sukuna into the world once more. Though Yuuji can control and confine Sukuna to his own body, the Jujutsu world classifies Yuuji as a dangerous, high-level Curse who must be exterminated.
        
        Detained and sentenced to death, Yuuji meets Satoru Gojou—a teacher at Jujutsu High School—who explains that despite his imminent execution, there is an alternative for him. Being a rare vessel to Sukuna, if Yuuji were to die, then Sukuna would perish too. Therefore, if Yuuji were to consume the many other remnants of Sukuna, then Yuuji's subsequent execution would truly eradicate the malicious demon. Taking up this chance to make the world safer and live his life for a little longer, Yuuji enrolls in Jujutsu High, jumping headfirst into a harsh and unforgiving battlefield.`
    })
})
app.get('/DeadDeadDemons', (req, res) => {
    res.render('2', {
        title: 'Dead Dead Demons', message: 'Dead Dead Demons Dededededestruction', img: 'https://cdn.myanimelist.net/images/manga/3/142079.jpg', content: `When you look up at the sky, what do you see? A blue sky? Freedom? A hopeful future? The people of Tokyo see none of these. Instead, an ominous alien mothership looms overhead, engulfing the city skyscape.

        Three years ago, they came. The arrival of the "Invaders" sparked the greatest war humanity had ever faced—one that threatened to end the world. The Japanese government scrambled to fight the Invaders. Weapons were mass-produced, sparking controversy and pacifist movements.
        
        That day, everything changed. And yet, nothing has changed. Kadode Koyama and Ouran Nakagawa live their final days like they always have: going to school, playing with friends, and doing what any carefree high school girls would do.
        
        As they grow up they come to learn what it truly means to be an adult, in a world where adults seem to be demons who only deceive and destroy. They come to learn the real threat to humanity is not the Invaders, but humanity itself.`
    })
})
app.get('/OnePiece', (req, res) => {
    res.render('2', {
        tilte: 'One Piece', message: 'The GOAT', img: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg', content: `Gol D. Roger, a man referred to as the "Pirate King," is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins.

        Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.
        `
    })
})