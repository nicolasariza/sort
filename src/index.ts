import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, -1, 5, -5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XcsBcYA');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.sort();
linkedList.print()


