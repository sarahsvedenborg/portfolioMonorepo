import { BiChalkboard as icon, BiWrench } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";

const toolEntry = {
  name: "toolEntry",
  title: "Tool",
  type: "object",
  icon: BiWrench,
  fields: [
    {
      name: "usecase",
      title: "Area",
      type: "string",
    },
    {
      name: "tool",
      title: "Tool",
      type: "string",
    },
    {
      name: "toolURL",
      title: "Tool URL",
      type: "anyLink",
    },
  ],
  preview: {
    select: {
      usecase: "usecase",
      tool: "tool",
    },
    prepare(selection) {
      const { usecase, tool } = selection;
      return {
        title: `${usecase}: ${tool}`,
      };
    },
  },
};

const lessonEntry = {
  name: "lessonEntry",
  title: "LessonEntry",
  type: "object",
  icon: IoSchoolOutline,
  fields: [
    {
      name: "lesson",
      title: "Lesson",
      type: "text",
    },
  ],
  preview: {
    select: {
      lesson: "lesson",
    },
    prepare(selection) {
      const { lesson } = selection;
      return {
        title: `${lesson}`,
      };
    },
  },
};

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon,
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "teaser",
      title: "Teaser",
      type: "text",
    },
    {
      name: "task",
      title: "The problem",
      type: "text",
    },
    {
      name: "demography",
      title: "Target audience",
      type: "string",
    },
    {
      name: "codeURL",
      title: "Code URL",
      type: "anyLink",
    },
    {
      name: "webURL",
      title: "Web URL",
      type: "anyLink",
    },
    {
      name: "designURL",
      title: "Design URL",
      type: "anyLink",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "tools",
      title: "Technology/tools",
      type: "array",
      of: [toolEntry],
    },
    {
      name: "lessons",
      title: "Lessons",
      type: "array",
      of: [lessonEntry],
    },
  ],
};
