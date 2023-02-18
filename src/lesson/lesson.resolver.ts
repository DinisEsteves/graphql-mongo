import { Resolver, Query } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {
    @Query(returns => LessonType)
    public lesson() {
        return {
            id: 'foobar',
            name: 'xPTO cLASS',
            startDate: (new Date()).toISOString(),
            endtDate: (new Date()).toISOString(),
        }
    }
}