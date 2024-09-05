import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Box,
  FormHelperText,
} from "@mui/material";

interface FormData {
  currentRank: string;
  currentVesselType: string;
  currentVesselName: string;
  vesselFlagState: string;
  lengthOfService: string;
}

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Define form data types
  const { user } = useUser();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to save profile data");
      }

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: "500px", margin: "auto", p: 2 }}
    >
      {/* Current Rank */}
      <FormControl fullWidth margin='normal' error={!!errors.currentRank}>
        <InputLabel>Current Rank</InputLabel>
        <Select
          {...register("currentRank", { required: "Current Rank is required" })}
          label='Current Rank'
        >
          <MenuItem value=''>
            <em>Select Rank</em>
          </MenuItem>
          <MenuItem value='Second Officer'>Second Officer</MenuItem>
          <MenuItem value='Captain'>Captain</MenuItem>
          {/* Add other ranks */}
        </Select>
        {errors.currentRank && (
          <FormHelperText>{errors.currentRank.message}</FormHelperText>
        )}
      </FormControl>

      {/* Current Vessel Type */}
      <FormControl fullWidth margin='normal' error={!!errors.currentVesselType}>
        <InputLabel>Current Vessel Type</InputLabel>
        <Select
          {...register("currentVesselType", {
            required: "Current Vessel Type is required",
          })}
          label='Current Vessel Type'
        >
          <MenuItem value=''>
            <em>Select Vessel Type</em>
          </MenuItem>
          <MenuItem value='Bulk Carrier'>Bulk Carrier</MenuItem>
          {/* Add other vessel types */}
        </Select>
        {errors.currentVesselType && (
          <FormHelperText>{errors.currentVesselType.message}</FormHelperText>
        )}
      </FormControl>

      {/* Current Vessel Name */}
      <FormControl fullWidth margin='normal' error={!!errors.currentVesselName}>
        <TextField
          label='Current Vessel Name'
          {...register("currentVesselName", {
            required: "Current Vessel Name is required",
          })}
          error={!!errors.currentVesselName}
        />
        {errors.currentVesselName && (
          <FormHelperText>{errors.currentVesselName.message}</FormHelperText>
        )}
      </FormControl>

      {/* Vessel Flag State */}
      <FormControl fullWidth margin='normal' error={!!errors.vesselFlagState}>
        <InputLabel>Vessel Flag State</InputLabel>
        <Select
          {...register("vesselFlagState", {
            required: "Vessel Flag State is required",
          })}
          label='Vessel Flag State'
        >
          <MenuItem value=''>
            <em>Select Flag State</em>
          </MenuItem>
          <MenuItem value='Greek'>Greek</MenuItem>
          <MenuItem value='Panama'>Panama</MenuItem>
          {/* Add other flag states */}
        </Select>
        {errors.vesselFlagState && (
          <FormHelperText>{errors.vesselFlagState.message}</FormHelperText>
        )}
      </FormControl>

      {/* Length of Service */}
      <FormControl fullWidth margin='normal' error={!!errors.lengthOfService}>
        <InputLabel>Length of Service</InputLabel>
        <Select
          {...register("lengthOfService", {
            required: "Length of Service is required",
          })}
          label='Length of Service'
        >
          <MenuItem value=''>
            <em>Select Length</em>
          </MenuItem>
          <MenuItem value='1-3 months'>1-3 months</MenuItem>
          <MenuItem value='1-3 months'>2-4 months</MenuItem>
          <MenuItem value='1-3 months'>4-6 months</MenuItem>
          <MenuItem value='1-3 months'>6-8 months</MenuItem>
          {/* Add other service lengths */}
        </Select>
        {errors.lengthOfService && (
          <FormHelperText>{errors.lengthOfService.message}</FormHelperText>
        )}
      </FormControl>

      {/* Submit Button */}
      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        sx={{ mt: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default SignInForm;
