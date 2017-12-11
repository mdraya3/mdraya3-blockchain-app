import { combineReducers } from "redux"

import { exactLocation } from "./miscReducers"
import { bookmarks } from "./bookmarks"
import { isFetchInProgress, searchResults, isOpenSearchResultsPending, searchQuery, resultsSelectedCategory } from "./fetchResults"
import { roadmaps, roadmapsDetailed, isFetchingRoadmaps} from "./roadmaps"
import { tasks, lastSavedTask, isTasksFetchInProgress, isTaskSaveInProgress, isTasksUpdateInProgress} from "./tasks"
import { isAuthorized, isOpenProfilePending, userProfile, isSignUpFormOpen } from "./authorization"
import { projects, isProjectSaveInProgress, isProjectsFetchInProgress} from "./projects"

export default combineReducers({
  resultsSelectedCategory,
  isOpenProfilePending,
  isOpenSearchResultsPending,
  isFetchInProgress,
  searchResults,
  userProfile,
  bookmarks,
  roadmaps,
  roadmapsDetailed,
  isFetchingRoadmaps,
  isSignUpFormOpen,
  searchQuery,
  isAuthorized,
  exactLocation,
  tasks,
  lastSavedTask,
  projects,
  isProjectSaveInProgress,
  isProjectsFetchInProgress,
  isTasksFetchInProgress,
  isTaskSaveInProgress,
  isTasksUpdateInProgress,
});