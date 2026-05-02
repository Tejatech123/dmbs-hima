import mongoose, { Schema, Document } from 'mongoose';

export interface ICriminal extends Document {
  crm_id: string;
  name: string;
  alias?: string;
  age?: string;
  nationality?: string;
  crime_type: string;
  status: string;
  danger_level: string;
  location?: string;
  date_of_crime?: string;
  description?: string;
  image_url?: string;
  created_at: Date;
  updated_at: Date;
}

const CriminalSchema: Schema = new Schema({
  crm_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  alias: { type: String },
  age: { type: String },
  nationality: { type: String },
  crime_type: { type: String, required: true },
  status: { type: String, required: true, default: 'Under Investigation' },
  danger_level: { type: String, required: true, default: '3' },
  location: { type: String },
  date_of_crime: { type: String },
  description: { type: String },
  image_url: { type: String },
}, { 
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});

export default mongoose.models.Criminal || mongoose.model<ICriminal>('Criminal', CriminalSchema);
