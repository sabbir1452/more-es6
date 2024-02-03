class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  ProvideFeedBack() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}
class Instructor extends TeamMember {
  name;
  designation = "Web Course Instructor";
  team = "web team";
  location;
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
  ProvideFeedBack() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

class Developer extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  tech;

  constructor(name, location) {
    super(name, location);
    this.tech = this.tech;
  }
  developFeatcher(featcher) {
    console.log(`Please develop the  ${featcher}`);
  }
  release(version) {
    console.log(`Please release the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "Job Placement Commandos";
  team = "web team";
  region;
  constructor(name, location) {
    super(name, location);
    this.region = this.region;
  }
  provideResume(featcher) {
    console.log(`Please develop the  ${featcher}`);
  }
  prepareStudent(version) {
    console.log(`Please release the version ${version}`);
  }
}

const alia = new Developer("Alia Bhatt", "Dhaka", "React");
console.log(alia);

alia.ProvideFeedBack();
const bipasha = new JobPlacement("bipasha", "kolkata", "India");
console.log(bipasha);
