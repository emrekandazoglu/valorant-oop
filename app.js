class Char {
    constructor(name, type, healty) {
        this._name = name;
        this.type = type;
        this._healty = healty;
    }

    set name(newname) {
        if (typeof newname !== "string") {
            console.log("Name must be a string");
        } else {
            this._name = newname;
        }
    }

    get name() {
        return `Char name is ${this._name}`;
    }

    set healty(newhealty) {
        if (typeof newhealty !== "number") {
            console.log("Health must be a number");
        } else {
            this._healty = newhealty;
        }
    }

    get healty() {
        return this._healty;
    }

    buyarmor() {
       console.log(this._healty += 50); 
    }

    damage(damage) {
        console.log(this._healty -= damage);
        
    }
}

class Sova extends Char {
    constructor(name, type, healty, skills) {
        super(name, type, healty);
        this._skills = skills;
    }

    set skills(newskills) {
        if (!Array.isArray(newskills) || newskills.length !== 4) {
            console.log("Skills must be an array and have 4 elements");
        } else {
            this._skills = newskills;
        }
    }

    get skills() {
        return this._skills;
    }

    useSkillOne() {
        console.log(`Sova is using ${this._skills[0]} skill`);
    }

    useSkillTwo() {
        console.log(`Sova is using ${this._skills[1]} skill`);
    }
}

// Doğru kullanım
const sovaSkills = ["uçma", "ok atma", "koşma", "gizlenme"];
const sova1 = new Sova("Emre", "Öncü", 100, sovaSkills);

console.log(sova1.name); // Çıktı: Char name is Emre
sova1.useSkillOne(); // Çıktı: Sova is using uçma skill
sova1.buyarmor();
sova1.damage(100);