// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
