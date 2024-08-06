import Questions from "../../question.json"
export function fisherYatesShuffle(arr: any) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const temp = new Array();

  export const allQuestions = Questions.map((item) => {
    temp.push({
      Question: decodeURIComponent(item.question),
      incorrect_answers: fisherYatesShuffle([
        ...item.incorrect_answers,
        item.correct_answer,
      ]),
      category: decodeURIComponent(item.category),
      type: item.type,
      difficulty: item.difficulty,
      correct_answer: decodeURIComponent(item.correct_answer),
    });

    return temp;
  });