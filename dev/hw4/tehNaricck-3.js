class Warrior {
    constructor() {
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        this.level_ = 1;
        this.rank_ = this.ranks[0];
        this.experience_ = 100;
        this.achievements_ = [];
    }

    updateInfo() {
        if (this.experience_ > 10000) {
            this.experience_ = 10000;
        }
        this.level_ = parseInt(this.experience_ / 100);
        this.rank_ = this.ranks[parseInt(this.level_ / 10)];
    }

    battle(enemy_level) {
        if (enemy_level < 1 || enemy_level > 100) {
            return "Invalid level";
        }
        const diff = this.level_ - enemy_level;
        if (diff < -4 && this.ranks.indexOf(this.rank_) < this.ranks.indexOf(this.ranks[parseInt(enemy_level / 10)])) {
            return "You've been defeated";
        }
        let add_exp = 0;
        if (diff < 0) {
            add_exp = 20 * diff * diff;
        } else if (diff === 0) {
            add_exp = 10;
        } else if (diff === 1) {
            add_exp = 5;
        }
        this.experience_ += add_exp;
        this.updateInfo();

        if (diff > 1) {
            return "Easy fight";
        }
        if (diff >= 0) {
            return "A good fight";
        }
        return "An intense fight";
    }

    training(arr) {
        if (this.level_ < arr[2]) {
            return "Not strong enough";
        }
        this.experience_ += arr[1];
        this.updateInfo();
        this.achievements_.push(arr[0]);
        return arr[0];
    }

    level() {
        return this.level_;
    }

    rank() {
        return this.rank_;
    }

    experience() {
        return this.experience_;
    }

    achievements() {
        return this.achievements_;
    }
}

let c = new Warrior();
c.level();