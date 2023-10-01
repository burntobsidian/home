import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
	}),
});

const goals = defineCollection({
	type: "content",
	schema: z.object({
		type: z.enum(["daily", "weekly", "monthly", "quarterly", "yearly"]),
		timeframe: z.string(),
	}),
});

export const collections = {
	blog,
	goals,
};
