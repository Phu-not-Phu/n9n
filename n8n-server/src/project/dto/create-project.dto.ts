export class CreateProjectDto {
  id: string;
  name: string;
  description: string;
  workflowsID: string[];
  createAt: Date;
  updateAt: Date;
  isDeleted: boolean;
}
