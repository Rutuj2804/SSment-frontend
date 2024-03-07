export enum QuestionType {
	"MULTIPLECHOICE" = 1,
	"IMAGECHOICE" = 2,
	"SHORTANSWER" = 3,
	"LONGANSWER" = 4,
	"YESNOTYPE" = 5,
	"TRUEFALSETYPE" = 6,
	"OPINIONCASE" = 7,
	"CODINGTYPE" = 8,
}

export const getQuestionType = (i: number) => {
	var type = "";

	switch (i) {
		case QuestionType.MULTIPLECHOICE:
			type = "Multiple Choice Question";
			break;
		case QuestionType.IMAGECHOICE:
			type = "Image Choice Question";
			break;
		case QuestionType.SHORTANSWER:
			type = "Short Answer Question";
			break;
		case QuestionType.LONGANSWER:
			type = "Long Answer Question";
			break;
		case QuestionType.YESNOTYPE:
			type = "Yes No Type Question";
			break;
		case QuestionType.TRUEFALSETYPE:
			type = "True False Type Question";
			break;
		case QuestionType.OPINIONCASE:
			type = "Opinion Case Question";
			break;
		case QuestionType.CODINGTYPE:
			type = "Coding Type Question";
			break;
	}
	return type;
};
